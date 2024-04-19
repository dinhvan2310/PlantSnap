import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import storage from '@react-native-firebase/storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {Crop, Flash, FlashSlash, Gallery} from 'iconsax-react-native';
import Lottie from 'lottie-react-native';
import ImageResizer from '@bam.tech/react-native-image-resizer';
import {
  default as React,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  AnimatableStringValue,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {
  Camera,
  Templates,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';
import DescComponent from '../components/DescComponent';
import RowComponent from '../components/RowComponent';
import SectionComponent from '../components/SectionComponent';
import SpaceComponent from '../components/SpaceComponent';
import TitleComponent from '../components/TitleComponent';
import {addPlantHistory, savePlantImage} from '../api/FirebaseService';
import {plantDetect} from '../api/LeafClassification';
import ButtonComponent from '../components/ButtonComponent';
import {resizeImageWithAspectRatio} from '../utils/resizeImage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const CameraScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  // *state
  const [isflash, setFlash] = React.useState<boolean>(false);
  const [activeCamera, setActiveCamera] = useState<'front' | 'back'>('back');
  const [plant, setPlant] = useState<PlantDetectType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // ?focus effect, reset camera to back when screen is unfocused, prevent bug
  useFocusEffect(
    useCallback(() => {
      return () => {
        setActiveCamera('back');
      };
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBackgroundColor('rgba(0,0,0,0.3)');
      StatusBar.setBarStyle('light-content');
    }, []),
  );

  // *camera permission
  const {hasPermission, requestPermission} = useCameraPermission();
  // request camera permission
  useEffect(() => {
    if (!hasPermission) {
      requestPermission().then(permission => {
        if (permission) {
          console.log('Permission granted');
        } else {
          console.log('Permission denied');
        }
      });
    }
  }, [hasPermission, requestPermission]);
  // *camera device and format
  const device = useCameraDevice(activeCamera);
  const format = useCameraFormat(device, [
    {
      photoResolution: {width: 720, height: 1280},
    },
  ]);

  // *refs
  const cameraRef = React.useRef<Camera>(null);
  const sheetRef = useRef<BottomSheet>(null);

  // *animation value and style for rotate button
  const rotate = useSharedValue<AnimatableStringValue>('0deg');
  const animatedRotateStyles = useAnimatedStyle(() => ({
    transform: [{rotate: rotate.value}],
  }));

  // *bottom sheet variables
  const snapPoints = useMemo(() => ['50%', '90%'], []);
  const handleSheetChange = useCallback((index: number) => {
    console.log('handleSheetChange', index);
  }, []);
  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  if (!device) {
    return (
      <View>
        <Text>Camera not found</Text>
      </View>
    );
  }

  // Todo: Action
  const handleSwitchCamera = () => {
    setActiveCamera(activeCamera === 'back' ? 'front' : 'back');
    console.log(rotate.value);
    rotate.value = withSpring(rotate.value === '0deg' ? '180deg' : '0deg');
  };
  const handleTaskPhoto = async () => {
    setLoading(true);
    const result = await cameraRef.current?.takePhoto({
      flash: isflash ? 'on' : 'off',
      enableShutterSound: false,
      qualityPrioritization: 'speed',
    });
    console.log(result?.height, result?.width);
    if (result) {
      const url = await savePlantImage(result.path);
      const rs = await plantDetect(url);
      setPlant(rs);
      handleSnapPress(0);
      addPlantHistory(rs);
    }
    setLoading(false);
  };
  const handleTaskPhotoFromGallery = async () => {
    const result: ImagePickerResponse = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
      quality: 1,
    });

    if (result.didCancel) {
      return;
    }

    const storageRef = storage().ref(`photos/${new Date().getTime()}.jpg`);
    if (result?.assets === undefined) {
      return;
    }
    if (result.assets.length === 0) {
      console.log('No image selected');
      return;
    }

    const fileSize = result.assets[0]?.fileSize as number;
    if (fileSize >= 208962) {
      console.log(
        'Image size too large',
        fileSize,
        result.assets[0]?.width,
        result.assets[0]?.height,
      );
      result.assets[0]?.fileSize;

      const width = result.assets[0]?.width as number;
      const height = result.assets[0]?.height as number;

      const {newWidth, newHeight} = resizeImageWithAspectRatio(
        width,
        height,
        720,
        1280,
      );

      console.log('Resizing image', newWidth, newHeight);

      ImageResizer.createResizedImage(
        result.assets[0]?.uri as string,
        newWidth,
        newHeight,
        'JPEG',
        100,
      )
        .then(response => {
          // response.uri is the URI of the new image that can now be displayed, uploaded...
          // response.path is the path of the new image
          // response.name is the name of the new image with the extension
          // response.size is the size of the new image
          const rs = plantDetect(response.uri).then(rs => {
            setPlant(rs);
            handleSnapPress(0);
            addPlantHistory(rs);
          });
        })
        .catch(err => {
          // Oops, something went wrong. Check that the filename is correct and
          // inspect err to get more details.
          console.log(err);
        });
    } else {
      console.log(
        'Image size is good',
        result.assets[0]?.width,
        result.assets[0]?.height,
      );
      const url = await savePlantImage(result.assets[0]?.uri as string);
      const rs = await plantDetect(url);
      setPlant(rs);
      handleSnapPress(0);
      addPlantHistory(rs);
    }
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Camera
        ref={cameraRef}
        style={[StyleSheet.absoluteFill, {}]}
        device={device}
        isActive={true}
        format={format}
        photo={true}
        enableZoomGesture={true}
        enableHighQualityPhotos={true}
      />
      <RowComponent
        justify="space-between"
        styles={{
          position: 'absolute',
          top: 46,
          left: 24,
          right: 24,
        }}>
        {/* icon flash */}
        {isflash ? (
          <TouchableOpacity
            onPress={() => {
              setFlash(!isflash);
            }}>
            <Flash size="24" color="#fff" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setFlash(!isflash);
            }}>
            <FlashSlash size="24" color="#fff" />
          </TouchableOpacity>
        )}
        <RowComponent>
          <TouchableOpacity onPress={() => {}}>
            <Crop size="24" color="#fff" />
          </TouchableOpacity>
          <SpaceComponent width={16} />
          <TouchableOpacity onPress={() => {}}>
            <IconEntypo name="dots-three-vertical" size={18} color={'#fff'} />
          </TouchableOpacity>
        </RowComponent>
      </RowComponent>
      <RowComponent
        justify="space-between"
        styles={{
          position: 'absolute',
          bottom: 64,
          left: 24,
          right: 24,
        }}>
        <TouchableOpacity onPress={handleTaskPhotoFromGallery}>
          <Gallery size="32" color="#fff" />
        </TouchableOpacity>

        {loading ? (
          <View
            style={{
              width: 64,
              height: 64,
            }}>
            <Lottie
              style={{
                flex: 1,
              }}
              source={require('../assets/animations/cameraLoading.json')}
              autoPlay
              loop
              resizeMode="cover"
            />
          </View>
        ) : (
          <TouchableOpacity onPress={handleTaskPhoto}>
            <View
              style={{
                width: 64,
                height: 64,
                borderRadius: 32,
                borderWidth: 2,
                borderColor: '#fff',
              }}
            />
          </TouchableOpacity>
        )}
        <Animated.View style={[animatedRotateStyles]}>
          <TouchableOpacity onPress={handleSwitchCamera}>
            <IconAnt name="sync" size={24} color={'#fff'} />
          </TouchableOpacity>
        </Animated.View>
      </RowComponent>

      {/* bottom sheet component */}
      {plant && (
        <BottomSheet
          ref={sheetRef}
          enablePanDownToClose={true}
          snapPoints={snapPoints}
          index={plant ? 0 : -1}
          onChange={handleSheetChange}>
          <BottomSheetView>
            <SectionComponent>
              <TouchableOpacity
                onPress={() => {
                  navigation.getParent()?.navigate('History', {
                    screen: 'DetailPlant',
                    plant,
                  });
                }}>
                <TitleComponent title={plant?.common_name} />
              </TouchableOpacity>
              <DescComponent text={plant?.scientific_name} />
            </SectionComponent>
            <SectionComponent>
              <DescComponent text="Description" size={24} lineHeight={24} />
              <DescComponent text={plant?.description} />
            </SectionComponent>
            <SectionComponent>
              <Image
                source={{
                  uri: plant?.image_url as string,
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 8,
                }}
              />
            </SectionComponent>
          </BottomSheetView>
        </BottomSheet>
      )}
    </View>
  );
};

export default CameraScreen;
