import {View, Text, Button} from 'react-native';
import React from 'react';
import httpRequests from '../api/httpRequest';
import axios from 'axios';

const SettingScreen = () => {
  const func = async () => {
    try {
      httpRequests.get('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button title="Upload Image" onPress={func} />
    </View>
  );
};

export default SettingScreen;
