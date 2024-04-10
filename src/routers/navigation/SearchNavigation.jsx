import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SearchScreen from '../../screens/SearchScreen';

const SearchNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default SearchNavigation;
