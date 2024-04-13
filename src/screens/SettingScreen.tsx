import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import React from 'react';
import {setItem} from '../utils/asyncStorage';
import {onSignOutPress} from '../auth/authContext';
import {useNavigation} from '@react-navigation/native';

interface SettingScreenProps {
  refTabBar: any;
}

const SettingScreen = (props: SettingScreenProps) => {
  const navigation = useNavigation();
  const {refTabBar} = props;
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', e => {
      StatusBar.setBackgroundColor('transparent');
      if (refTabBar) {
        refTabBar.current.setVisible(true);
      }
      // ...
    });

    return unsubscribe;
  }, [navigation]);
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
