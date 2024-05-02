import ImageResizer from '@bam.tech/react-native-image-resizer';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Crop, Flash, FlashSlash, Gallery} from 'iconsax-react-native';
import Lottie from 'lottie-react-native';
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
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  default as ImageCropPicker,
  default as ImagePicker,
} from 'react-native-image-crop-picker';
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
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';
import {addPlantHistory, savePlantImage} from '../api/FirebaseService';
import {detectPlant, getPlantDirectory} from '../api/LeafClassification';
import RowComponent from '../components/RowComponent';
import SpaceComponent from '../components/SpaceComponent';
import {PlantType} from '../types/plantType';
import {resizeImageWithAspectRatio} from '../utils/resizeImage';
import DescComponent from '../components/DescComponent';
import TitleComponent from '../components/TitleComponent';
import {colors} from '../constants/colors';
import CardComponent from '../components/CardComponent';

const CameraScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  // *state
  const [isflash, setFlash] = React.useState<boolean>(false);
  const [activeCamera, setActiveCamera] = useState<'front' | 'back'>('back');
  const [loading, setLoading] = useState<boolean>(false);
  const [plantDirectory, setPlantDirectory] = useState<PlantType[]>([]);
  const [plantDetected, setPlantDetected] = useState<any>(null);

  useEffect(() => {
    const fetchPlantDirectory = async () => {
      const response = await getPlantDirectory();
      setPlantDirectory(response);
    };
    fetchPlantDirectory();
  }, []);

  // ?focus effect, reset camera to back when screen is unfocused, prevent bug
  useFocusEffect(
    useCallback(() => {
      return () => {
        setActiveCamera('back');
      };
    }, []),
  );

  // *status bar
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
  const handleSheetChange = useCallback((index: number) => {}, []);
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

  const handleNavigation = (plantid: number, url: string, status: boolean) => {
    addPlantHistory({
      common_name: plantDirectory[plantid].name,
      scientific_name: plantDirectory[plantid].scientific_name,
      image_url: url,
      plantid: plantid,
      status: status,
      timestamp: new Date().getTime(),
    });
    navigation.getParent()?.navigate('HistoryNavigation', {
      screen: 'DetailPlant',
      params: {
        plant: plantDirectory[plantid],
        status: status,
        history_plant_image: url,
      },
      initial: false,
    });
  };

  // Todo: Action
  const handleSwitchCamera = () => {
    setActiveCamera(activeCamera === 'back' ? 'front' : 'back');
    rotate.value = withSpring(rotate.value === '0deg' ? '180deg' : '0deg');
  };
  const handleTaskPhoto = async () => {
    setLoading(true);
    const result = await cameraRef.current?.takePhoto({
      flash: isflash ? 'on' : 'off',
      enableShutterSound: false,
      qualityPrioritization: 'speed',
    });

    if (result) {
      try {
        const resultCrop = await ImageCropPicker.openCropper({
          mediaType: 'photo',
          path: 'file://' + result.path,
          freeStyleCropEnabled: true,
          cropping: true,
          cropperToolbarTitle: 'Crop Plant Image',
        });

        const url = await savePlantImage(resultCrop.path);
        const {
          plant_id_top1,
          plant_id_top2,
          plant_id_top3,
          score_top1,
          score_top2,
          score_top3,
          status,
          error,
        }: any = await detectPlant(url);

        if (error) {
          console.log('Error detected plant', error);
          setPlantDetected({
            error: true,
          });
          setLoading(false);
          return;
        }

        setPlantDetected({
          plant_id_top1: plant_id_top1,
          plant_id_top2: plant_id_top2,
          plant_id_top3: plant_id_top3,
          score_top1: score_top1,
          score_top2: score_top2,
          score_top3: score_top3,
          status: status,
          image_url: url,
        });
        handleSnapPress(0);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.log(e);
      }
    }
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
    if (result?.assets === undefined) {
      return;
    }
    if (result.assets.length === 0) {
      console.log('No image selected');
      return;
    }

    setLoading(true);
    try {
      // check image size and resize if needed
      const fileSize = result.assets[0]?.fileSize as number;
      let resultResize;
      if (fileSize >= 208962) {
        console.log('Image size is too large, resizing...');
        const width = result.assets[0]?.width as number;
        const height = result.assets[0]?.height as number;
        const {newWidth, newHeight} = resizeImageWithAspectRatio(
          width,
          height,
          720,
          1280,
        );
        resultResize = await ImageResizer.createResizedImage(
          result.assets[0]?.uri as string,
          newWidth,
          newHeight,
          'JPEG',
          100,
        );
      }

      const resultCrop = await ImagePicker.openCropper({
        path: resultResize?.uri || (result.assets[0]?.uri as string),
        mediaType: 'photo',
        freeStyleCropEnabled: true,
        cropping: true,
        cropperToolbarTitle: 'Crop Plant Image',
      });

      const url = await savePlantImage(resultCrop.path);

      const {
        plant_id_top1,
        plant_id_top2,
        plant_id_top3,
        score_top1,
        score_top2,
        score_top3,
        status,
        error,
      }: any = await detectPlant(url);
      if (error) {
        console.log('Error detected plant', error);
        setPlantDetected({
          error: true,
        });
        setLoading(false);
        return;
      }

      setPlantDetected({
        plant_id_top1: plant_id_top1,
        plant_id_top2: plant_id_top2,
        plant_id_top3: plant_id_top3,
        score_top1: score_top1,
        score_top2: score_top2,
        score_top3: score_top3,
        status: status,
        image_url: url,
      });
      handleSnapPress(0);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
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
      {plantDetected && (
        <BottomSheet
          ref={sheetRef}
          enablePanDownToClose={true}
          snapPoints={snapPoints}
          index={plantDetected ? 0 : -1}
          onChange={handleSheetChange}>
          <BottomSheetView>
            {plantDetected.error ? (
              <View style={{height: 200, backgroundColor: 'coral'}} />
            ) : (
              <View
                style={{
                  height: '100%',
                  paddingHorizontal: 8,
                }}>
                <TitleComponent
                  style={{
                    textAlign: 'center',
                  }}
                  title="Plant Detected Result"
                  color={colors.gray}
                />
                <SpaceComponent height={16} />
                <ImageBackground
                  style={{
                    height: 200,
                    borderRadius: 8,
                    justifyContent: 'flex-end',
                    overflow: 'hidden',
                  }}
                  source={{
                    uri: plantDirectory[plantDetected.plant_id_top1]
                      .url_image[0],
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      handleNavigation(
                        plantDetected.plant_id_top1,
                        plantDetected.image_url,
                        plantDetected.status,
                      );
                    }}
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.3)',
                      padding: 8,
                      borderRadius: 8,
                    }}>
                    <RowComponent justify="space-between">
                      <TitleComponent
                        title={plantDirectory[plantDetected.plant_id_top1].name}
                        color={colors.white}
                      />
                      <DescComponent
                        text={`${Number(plantDetected.score_top1) * 100} %`}
                        color={colors.secondary}
                        fontFamily="Regular"
                        size={22}
                      />
                    </RowComponent>
                    <DescComponent
                      text={
                        plantDirectory[plantDetected.plant_id_top1]
                          .scientific_name
                      }
                      color={colors.white}
                    />
                  </TouchableOpacity>
                </ImageBackground>
                <SpaceComponent height={16} />
                <ImageBackground
                  style={{
                    height: 200,
                    borderRadius: 8,
                    justifyContent: 'flex-end',
                    overflow: 'hidden',
                  }}
                  source={{
                    uri: plantDirectory[plantDetected.plant_id_top2]
                      .url_image[0],
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      handleNavigation(
                        plantDetected.plant_id_top2,
                        plantDetected.image_url,
                        plantDetected.status,
                      );
                    }}
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.3)',
                      padding: 8,
                      borderRadius: 8,
                    }}>
                    <RowComponent justify="space-between">
                      <TitleComponent
                        title={plantDirectory[plantDetected.plant_id_top2].name}
                        color={colors.white}
                      />
                      <DescComponent
                        text={`${Number(plantDetected.score_top2) * 100} %`}
                        color={colors.secondary}
                        fontFamily="Regular"
                        size={22}
                      />
                    </RowComponent>
                    <DescComponent
                      text={
                        plantDirectory[plantDetected.plant_id_top2]
                          .scientific_name
                      }
                      color={colors.white}
                    />
                  </TouchableOpacity>
                </ImageBackground>
                <SpaceComponent height={16} />
                <ImageBackground
                  style={{
                    height: 200,
                    borderRadius: 8,
                    justifyContent: 'flex-end',
                    overflow: 'hidden',
                  }}
                  source={{
                    uri: plantDirectory[plantDetected.plant_id_top3]
                      .url_image[0],
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      handleNavigation(
                        plantDetected.plant_id_top3,
                        plantDetected.image_url,
                        plantDetected.status,
                      );
                    }}
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.3)',
                      padding: 8,
                      borderRadius: 8,
                    }}>
                    <RowComponent justify="space-between">
                      <TitleComponent
                        title={plantDirectory[plantDetected.plant_id_top3].name}
                        color={colors.white}
                      />
                      <DescComponent
                        text={`${Number(
                          Number(plantDetected.score_top3) * 100,
                        ).toFixed(2)} %`}
                        color={colors.secondary}
                        fontFamily="Regular"
                        size={22}
                      />
                    </RowComponent>
                    <DescComponent
                      text={
                        plantDirectory[plantDetected.plant_id_top3]
                          .scientific_name
                      }
                      color={colors.white}
                    />
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            )}
          </BottomSheetView>
        </BottomSheet>
      )}
    </View>
  );
};

export default CameraScreen;
