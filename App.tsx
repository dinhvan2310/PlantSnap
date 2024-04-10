import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppNav from './src/routers/AppNav';

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <NavigationContainer>
        <AppNav />
      </NavigationContainer>
    </SafeAreaView>
  );
}
