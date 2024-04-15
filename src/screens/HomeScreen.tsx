import {View, Text, Image, StatusBar, Alert} from 'react-native';
import React, {useEffect} from 'react';
import Container from '../components/Container';
import TitleComponent from '../components/TitleComponent';
import SectionComponent from '../components/SectionComponent';
import RowComponent from '../components/RowComponent';
import DescComponent from '../components/DescComponent';
import {Logout} from 'iconsax-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/colors';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const user = auth().currentUser;

  const [text, setText] = React.useState('');
  const hasUnsavedChanges = Boolean(text);

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        if (!hasUnsavedChanges) {
          // If we don't have unsaved changes, then we don't need to do anything
          return;
        }

        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        Alert.alert(
          'Discard changes?',
          'You have unsaved changes. Are you sure to discard them and leave the screen?',
          [
            {text: "Don't leave", style: 'cancel', onPress: () => {}},
            {
              text: 'Discard',
              style: 'destructive',
              // If the user confirmed, then we dispatch the action we blocked earlier
              // This will continue the action that had triggered the removal of the screen
              onPress: () => navigation.dispatch(e.data.action),
            },
          ],
        );
      }),
    [navigation, hasUnsavedChanges],
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
