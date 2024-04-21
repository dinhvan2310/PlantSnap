import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useRef} from 'react';
import {Image, ScrollView, StatusBar, View} from 'react-native';
import {ImageViewer, ImageWrapper} from 'react-native-reanimated-viewer';
import Container from '../components/Container';
import DescComponent from '../components/DescComponent';
import SectionComponent from '../components/SectionComponent';
import SpaceComponent from '../components/SpaceComponent';
import TitleComponent from '../components/TitleComponent';
import {colors} from '../constants/colors';
import {PlantType} from '../types/plantType';

const NOTFOUNDIMAGE =
  'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg';

const DetailPlantScreen = ({route, navigation}: any) => {
  // set status bar
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBackgroundColor('rgba(0,0,0,0.3)');
      StatusBar.setBarStyle('light-content');
    }, []),
  );

  const [plant, setPlant] = React.useState<PlantType | null>(null);
  const [status, setStatus] = React.useState<boolean | null>(null);

  // get plant data
  React.useEffect(() => {
    const plant = route.params?.plant;
    if (route.params?.history_plant_image) {
      plant.image_url = [route.params?.history_plant_image];
    }
    console.log('status', route.params?.status);
    setStatus(route.params?.status);
    setPlant(route.params?.plant);
  }, [route, navigation]);

  // mock data
  const imageRef = useRef(null);

  return (
    <Container back={true} full={true}>
      <ScrollView>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 327,
          }}>
          <ImageViewer
            ref={imageRef}
            data={(plant?.image_url ?? []).map(el => ({
              key: `key-${el}`,
              source: {uri: el},
            }))}
            dragUpToCloseEnabled={true}
          />
          <View
            style={{
              flexDirection: 'row',
            }}>
            <ImageWrapper
              style={{width: '100%', height: 327}}
              key={plant?.image_url[0]}
              viewerRef={imageRef}
              index={0}
              source={{
                uri: plant?.image_url[0] || NOTFOUNDIMAGE,
              }}>
              <Image
                style={{width: '100%', height: 327}}
                source={{
                  uri: plant?.image_url[0] || NOTFOUNDIMAGE,
                }}
              />
            </ImageWrapper>
          </View>
        </View>
        <SpaceComponent height={327 - 64} />
        <Container paddingTop={32}>
          <SectionComponent>
            <TitleComponent title={plant?.common_name} color={colors.gray} />
            <DescComponent text={plant?.scientific_name} />
          </SectionComponent>
          {status !== undefined && (
            <SectionComponent>
              <DescComponent
                text={status ? 'Healthy' : 'Unhealthy'}
                style={{
                  color: colors.red,
                  fontSize: 18,
                  fontWeight: '600',
                  lineHeight: 24,
                }}
              />
            </SectionComponent>
          )}
          <SectionComponent>
            <DescComponent
              text={`Another name: ${plant?.another_name.join(', ')}`}
              style={{
                color: colors.gray,
                fontSize: 18,
                fontWeight: '600',
                lineHeight: 24,
              }}
            />
          </SectionComponent>
          <SectionComponent>
            <DescComponent
              text={`Description: ${plant?.description}`}
              style={{
                color: colors.gray,
                fontSize: 18,
                fontWeight: '600',
                lineHeight: 24,
              }}
            />
          </SectionComponent>
          <SectionComponent>
            <DescComponent
              text={`Plan uses: ${plant?.uses}`}
              style={{
                color: colors.gray,
                fontSize: 18,
                fontWeight: '600',
                lineHeight: 24,
              }}
            />
          </SectionComponent>
          <SectionComponent>
            <DescComponent
              text={`Plan ingredient: ${plant?.ingredient}`}
              style={{
                color: colors.gray,
                fontSize: 18,
                fontWeight: '600',
                lineHeight: 24,
              }}
            />
          </SectionComponent>
          <SectionComponent>
            <DescComponent
              text={`Plan medicine: ${plant?.medicine}`}
              style={{
                color: colors.gray,
                fontSize: 18,
                fontWeight: '600',
                lineHeight: 24,
              }}
            />
          </SectionComponent>
          <SectionComponent>
            <DescComponent
              text={`Plan effect medicine: ${plant?.effect_medicine}`}
              style={{
                color: colors.gray,
                fontSize: 18,
                fontWeight: '600',
                lineHeight: 24,
              }}
            />
          </SectionComponent>
          <SectionComponent>
            <DescComponent
              text={`Plan medicine preparation: ${plant?.medicine_preparation}`}
              style={{
                color: colors.gray,
                fontSize: 18,
                fontWeight: '600',
                lineHeight: 24,
              }}
            />
          </SectionComponent>
          <SectionComponent>
            <DescComponent
              text={`Plan note uses: ${plant?.note_uses}`}
              style={{
                color: colors.gray,
                fontSize: 18,
                fontWeight: '600',
                lineHeight: 24,
              }}
            />
          </SectionComponent>
        </Container>
      </ScrollView>
    </Container>
  );
};

export default DetailPlantScreen;
