import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CameraScreen from '../../screens/CameraScreen';
import DetailPlantScreen from '../../screens/DetailPlantScreen';
const CameraNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
};

export default CameraNavigation;
