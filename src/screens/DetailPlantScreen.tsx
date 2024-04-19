import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import React, {useCallback} from 'react';
import Container from '../components/Container';
import TitleComponent from '../components/TitleComponent';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import SectionComponent from '../components/SectionComponent';
import SpaceComponent from '../components/SpaceComponent';
import DescComponent from '../components/DescComponent';
import {colors} from '../constants/colors';

const NOTFOUNDIMAGE =
  'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg';
const DetailPlantScreen = ({route, navigation}: any) => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBackgroundColor('rgba(0,0,0,0.3)');
      StatusBar.setBarStyle('light-content');
    }, []),
  );

  const [plant, setPlant] = React.useState<PlantDetectType | null>(null);
  React.useEffect(() => {
    setPlant(route.params?.plant);
  }, [route, navigation]);

  return (
    <Container back={true} full={true}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 327,
        }}>
        <Image
          source={{
            uri: (plant?.image_url as string) || NOTFOUNDIMAGE,
          }}
          style={{
            width: '100%',
            height: 327,
          }}
        />
      </View>
      <SpaceComponent height={327 - 64} />
      <Container paddingTop={32}>
        <SectionComponent>
          <TitleComponent title={plant?.common_name} color={colors.gray} />
          <DescComponent text={plant?.scientific_name} />
        </SectionComponent>
        <SectionComponent>
          <DescComponent
            text={plant?.description}
            style={{
              color: colors.gray,
              fontSize: 18,
              fontWeight: '600',
              lineHeight: 24,
            }}
          />
        </SectionComponent>
      </Container>
    </Container>
  );
};

export default DetailPlantScreen;
