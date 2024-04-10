import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import HomeScreen from '../../screens/HomeScreen';

const HomeNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    justifyContent: 'center',
    ...Platform.select({
      android: {
        paddingTop: 40,
      },
    }),
  },
});

export default HomeNavigation;
