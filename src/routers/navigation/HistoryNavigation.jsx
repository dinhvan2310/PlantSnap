import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HistoryScreen from '../../screens/HistoryScreen';

const HistoryNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Album" component={HistoryScreen} />
    </Stack.Navigator>
  );
};

export default HistoryNavigation;
