import {useNavigation} from '@react-navigation/native';
import {SearchNormal} from 'iconsax-react-native';
import React from 'react';
import CardComponent from '../components/CardComponent';
import Container from '../components/Container';
import InputComponent from '../components/InputComponent';
import RowComponent from '../components/RowComponent';
import SectionComponent from '../components/SectionComponent';
import SpaceComponent from '../components/SpaceComponent';
import {colors} from '../constants/colors';

const SearchScreen = () => {
  const navigation = useNavigation();

  return (
    <Container isScroll={false}>
      <SectionComponent>
        <InputComponent
          icon={<SearchNormal size={24} color={colors.decs} />}
          placeholder="Search plant"
          onChange={() => {}}
          styles={{
            paddingVertical: 8,
          }}
        />
      </SectionComponent>

      <Container
        styles={{
          paddingTop: 0,
          paddingHorizontal: 0,
        }}>
        <SectionComponent>
          <RowComponent>
            <CardComponent
              type="small"
              title="123"
              desc="This is a description"
              // image={require('../assets/images/plant1.png')}
              bookmark={true}
              onPress={() => {
                navigation.navigate('DetailPlant' as never);
              }}
            />
            <SpaceComponent width={16} />
            <CardComponent
              type="small"
              title="Monstera"
              desc="This is a description"
              // image={require('../assets/images/plant1.png')}
              bookmark={true}
            />
          </RowComponent>
        </SectionComponent>

        <SpaceComponent height={64} />
      </Container>
    </Container>
  );
};

export default SearchScreen;
