import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

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

  return <Camera style={{flex: 1}} device={device} isActive={true} />;
};

export default CameraScreen;
