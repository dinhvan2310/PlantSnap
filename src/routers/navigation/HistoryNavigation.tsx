import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DetailPlantScreen from '../../screens/DetailPlantScreen';
import HistoryScreen from '../../screens/HistoryScreen';

const Stack = createNativeStackNavigator();
const HistoryNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen
        options={{}}
        name="DetailPlant"
        component={DetailPlantScreen}
      />
    </Stack.Navigator>
  );
};

export default HistoryNavigation;
