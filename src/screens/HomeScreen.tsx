import auth from '@react-native-firebase/auth';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Image, StatusBar, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Container from '../components/Container';
import DescComponent from '../components/DescComponent';
import RowComponent from '../components/RowComponent';
import SectionComponent from '../components/SectionComponent';
import {colors} from '../constants/colors';

const HomeScreen = () => {
  const navigation = useNavigation();
  const user = auth().currentUser;

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBackgroundColor('rgba(0,0,0,0)');
      StatusBar.setBarStyle('dark-content');
    }, []),
  );

  return (
    <Container>
      <SectionComponent>
        <RowComponent
          justify="space-between"
          styles={{
            alignItems: 'center',
          }}>
          <RowComponent>
            <Image
              source={{
                uri:
                  user?.photoURL ||
                  'https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/user_account_profile-2-512.png',
              }}
              style={{width: 48, height: 48, borderRadius: 100}}
            />
            <View>
              <DescComponent
                style={{
                  paddingHorizontal: 12,
                  fontWeight: '500',
                }}
                text="Welcome back!"
                size={14}
              />
              <DescComponent
                style={{
                  paddingHorizontal: 12,
                  fontWeight: '700',
                  lineHeight: 24,
                }}
                text={user?.displayName}
                size={22}
              />
            </View>
          </RowComponent>
          <Icon
            name="sign-out"
            size={24}
            color={colors.decs}
            onPress={() => {
              auth().signOut();
            }}
          />
        </RowComponent>
      </SectionComponent>
    </Container>
  );
};

export default HomeScreen;
