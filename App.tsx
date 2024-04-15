import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, View} from 'react-native';
// import {Provider} from 'react-redux';
// import store from './store';
import AppNav from './src/routers/AppNav';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <NavigationContainer>
        {/* <Provider store={store}> */}
        <AppNav />
        {/* </Provider> */}
      </NavigationContainer>
    </View>
  );
}
