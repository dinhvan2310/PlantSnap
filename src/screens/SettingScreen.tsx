import {View, Text} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const SettingScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{height: 50, backgroundColor: 'red'}} />
      <WebView source={{uri: 'https://www.google.com'}} />
    </View>
  );
};

export default SettingScreen;
