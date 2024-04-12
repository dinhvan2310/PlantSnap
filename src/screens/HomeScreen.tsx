import {View, Text, Image} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import TitleComponent from '../components/TitleComponent';
import SectionComponent from '../components/SectionComponent';
import RowComponent from '../components/RowComponent';
import DescComponent from '../components/DescComponent';
import {Logout} from 'iconsax-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/colors';

const HomeScreen = () => {
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
          <Icon name="sign-out" size={24} color={colors.decs} />
        </RowComponent>
      </SectionComponent>
    </Container>
  );
};

export default HomeScreen;
