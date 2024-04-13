import {View, Text, Image} from 'react-native';
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

interface HomeScreenProps {
  refTabBar: any;
}

const HomeScreen = (props: HomeScreenProps) => {
  const navigation = useNavigation();
  const {refTabBar} = props;
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', e => {
      // Prevent default behavior
      console.log('HomeScreen focused');
      if (refTabBar) {
        refTabBar.current.setVisible(true);
      }
      // ...
    });

    return unsubscribe;
  }, [navigation]);
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
              source={require('../assets/images/avatar.jpg')}
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
                text="Phương Thảo"
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
