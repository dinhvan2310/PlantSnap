import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DetailPlantScreen from '../../screens/DetailPlantScreen';
import HistoryScreen from '../../screens/HistoryScreen';
import FeedbackScreen from '../../screens/FeedbackScreen';

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
      <Stack.Screen name="Feedback" component={FeedbackScreen} />
    </Stack.Navigator>
  );
};

export default HistoryNavigation;
