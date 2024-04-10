import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {setItem} from '../utils/asyncStorage';
import {onSignOutPress} from '../auth/authContext';

const SettingScreen = () => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => setItem('onboarding', 'true')}
        onPressIn={onSignOutPress}>
        <Text>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingScreen;
