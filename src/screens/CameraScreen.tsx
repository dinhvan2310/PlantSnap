import {useNavigation} from '@react-navigation/native';
import {Crop, Flash, FlashSlash, Gallery} from 'iconsax-react-native';
import React from 'react';
import {
  AnimatableStringValue,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
import RowComponent from '../components/RowComponent';
import SpaceComponent from '../components/SpaceComponent';
import convertHexToRGBA from '../utils/convertHexToRGBA';
import {launchImageLibrary} from 'react-native-image-picker';
interface CameraScreenProps {
  refTabBar: any;
}

const CameraScreen = (props: CameraScreenProps) => {
  const {hasPermission, requestPermission} = useCameraPermission();

  const navigation = useNavigation();
  const {refTabBar} = props;

  const rotate = useSharedValue<AnimatableStringValue>('0deg');
  const animatedRotateStyles = useAnimatedStyle(() => ({
    transform: [{rotate: rotate.value}],
  }));

  const [isflash, setFlash] = React.useState<boolean>(false);
  const [isback, setBack] = React.useState<boolean>(true);
  const cameraRef = React.useRef<Camera>(null);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', e => {
      StatusBar.setBackgroundColor(convertHexToRGBA('#000', 0.2));
      if (refTabBar) {
        refTabBar.current.setVisible(false);
      }
    });

    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
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

  const device = useCameraDevice(isback ? 'back' : 'front');
  const format = useCameraFormat(device, Templates.Photo);

  if (!device) {
    return (
      <View>
        <Text>Camera not found</Text>
      </View>
    );
  }

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
          <TouchableOpacity
            onPress={() => {
              console.log('Switch camera');
            }}>
            <Crop size="24" color="#fff" />
          </TouchableOpacity>
          <SpaceComponent width={16} />
          <TouchableOpacity
            onPress={() => {
              console.log('Switch camera');
            }}>
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
        <TouchableOpacity
          onPress={async () => {
            const result = await launchImageLibrary({
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 200,
              maxWidth: 200,
            });
          }}>
          <Gallery size="32" color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            cameraRef.current
              ?.takePhoto({
                flash: isflash ? 'on' : 'off',
                enableShutterSound: false,
              })
              .then(photo => {
                console.log(photo);
              });
          }}
          style={{
            height: 64,
            width: 64,
            borderRadius: 32,
            borderWidth: 2,
            borderColor: '#fff',
          }}></TouchableOpacity>
        <Animated.View style={[animatedRotateStyles]}>
          <TouchableOpacity
            onPress={() => {
              setBack(!isback);
              console.log(rotate.value);
              rotate.value = withSpring(
                rotate.value === '0deg' ? '180deg' : '0deg',
              );
            }}>
            <IconAnt name="sync" size={24} color={'#fff'} />
          </TouchableOpacity>
        </Animated.View>
      </RowComponent>
    </View>
  );
};

export default CameraScreen;
