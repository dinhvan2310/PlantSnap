import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {StatusBar, View} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import Container from '../components/Container';
import SectionComponent from '../components/SectionComponent';
import TitleComponent from '../components/TitleComponent';

const SettingScreen = () => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBackgroundColor('rgba(0,0,0,0)');
      StatusBar.setBarStyle('dark-content');
    }, []),
  );
  const user = auth().currentUser;
  if (!user) {
    throw new Error('User not found');
  }

  return (
    <Container>
      <View
        style={{
          flex: 1,
        }}>
        <SectionComponent>
          <TitleComponent title="Setting" />
        </SectionComponent>
      </View>
    </Container>
  );
};

export default SettingScreen;
