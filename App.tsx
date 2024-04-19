import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, View} from 'react-native';
// import {Provider} from 'react-redux';
// import store from './store';
import AppNav from './src/routers/AppNav';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <GestureHandlerRootView>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle={'light-content'}
        />
        <NavigationContainer>
          <AppNav />
        </NavigationContainer>
      </GestureHandlerRootView>
    </View>
  );
}
