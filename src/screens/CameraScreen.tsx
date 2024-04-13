import {View, Text, StatusBar, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import {useNavigation} from '@react-navigation/native';
import {AddCircle, Civic} from 'iconsax-react-native';

const CameraScreen = () => {
  const {hasPermission, requestPermission} = useCameraPermission();

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

  const device = useCameraDevice('back');
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
        style={[StyleSheet.absoluteFill, {}]}
        device={device}
        isActive={true}
      />
      <Civic
        size={48}
        color={'#fff'}
        style={{
          position: 'absolute',
          bottom: 48,
          right: 16,
          zIndex: 10,
        }}
      />
    </View>
  );
};

export default CameraScreen;
