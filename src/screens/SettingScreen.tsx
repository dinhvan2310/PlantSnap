import React from 'react';
import {Button, View} from 'react-native';
import httpRequests from '../api/httpRequest';
import ButtonComponent from '../components/ButtonComponent';
import axios from 'axios';
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';

const SettingScreen = () => {
  const func = async () => {
    const result: ImagePickerResponse = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
      quality: 1,
    });

    // console.log(result.assets[0]);

    const formData = new FormData();
    formData.append('user_id', 123);
    formData.append('common_name', 'test');
    formData.append('plantid', 0);
    formData.append('scientific_name', 'test');
    formData.append('status', 0);
    formData.append('timestamp', 123);
    formData.append('file', {
      uri: result.assets[0].uri,
      name: result.assets[0].fileName,
      type: result.assets[0].type,
    });

    // console.log(formData);
    try {
      const response = await axios.post(
        'https://bc73-1-54-155-99.ngrok-free.app/api/history',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      console.log(response.data);
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
