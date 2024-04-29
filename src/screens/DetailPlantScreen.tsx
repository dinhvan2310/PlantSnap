import {useFocusEffect} from '@react-navigation/native';
import {
  Book,
  Category2,
  Hospital,
  NoteFavorite,
  SunFog,
} from 'iconsax-react-native';
import React, {useCallback, useRef} from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import {ImageHeaderScrollView} from 'react-native-image-header-scroll-view';
import {ImageViewer, ImageWrapper} from 'react-native-reanimated-viewer';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import CardTextComponent from '../components/CardTextComponent';
import Container from '../components/Container';
import DescComponent from '../components/DescComponent';
import RowComponent from '../components/RowComponent';
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
      // StatusBar.setBackgroundColor('rgba(0,0,0,0.3)');
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
    setStatus(route.params?.status);
    setPlant(route.params?.plant);
  }, [route, navigation]);

  // mock data
  const imageRef = useRef(null);

  return (
    <Container
      back={true}
      full={true}
      styles={{
        backgroundColor: 'transparent',
      }}>
      <ImageViewer
        ref={imageRef}
        data={(plant?.image_url ?? []).map(el => ({
          key: `key-${el}`,
          source: {uri: el},
        }))}
        dragUpToCloseEnabled={true}
      />
      <ImageHeaderScrollView
        showsVerticalScrollIndicator={false}
        maxHeight={327}
        minHeight={72}
        maxOverlayOpacity={0.25}
        minOverlayOpacity={0}
        renderForeground={() => {
          return (
            <ImageWrapper
              style={{
                width: '100%',
              }}
              key={plant?.image_url[0]}
              viewerRef={imageRef}
              index={0}
              source={{
                uri: plant?.image_url[0] || NOTFOUNDIMAGE,
              }}>
              <Image
                style={{
                  opacity: 0,
                  width: '100%',
                  height: 327,
                }}
                source={{
                  uri: plant?.image_url[0] || NOTFOUNDIMAGE,
                }}
              />
            </ImageWrapper>
          );
        }}
        renderHeader={() => {
          return (
            <ImageWrapper
              style={{
                width: '100%',
              }}
              key={plant?.image_url[0]}
              viewerRef={imageRef}
              index={0}
              source={{
                uri: plant?.image_url[0] || NOTFOUNDIMAGE,
              }}>
              <Image
                style={{
                  width: '100%',
                  height: 327,
                }}
                source={{
                  uri: plant?.image_url[0] || NOTFOUNDIMAGE,
                }}
              />
            </ImageWrapper>
          );
        }}>
        <Container paddingTop={32}>
          <SectionComponent marginBottom={32}>
            <RowComponent justify="space-between">
              <View
                style={{
                  flexDirection: 'column',
                }}>
                <TitleComponent
                  title={plant?.common_name}
                  color={colors.black}
                />
                <DescComponent text={plant?.scientific_name} />
              </View>
              {status !== undefined && (
                <View
                  style={{
                    backgroundColor: status ? colors.blue : colors.red,
                    paddingVertical: 8,
                    paddingHorizontal: 24,
                    borderRadius: 16,
                  }}>
                  <Text
                    style={{
                      color: colors.white,
                      fontSize: 16,
                      fontWeight: '600',
                      lineHeight: 24,
                    }}>
                    {status ? 'Healthy' : 'Not healthy'}
                  </Text>
                </View>
              )}
            </RowComponent>
          </SectionComponent>
          {/* <SectionComponent>
            <CardTextComponent
              title="Tên khác"
              text={plant?.another_name}
              icon={<Category2 size={24} color={colors.black} />}
            />
          </SectionComponent> */}
          <SectionComponent>
            <CardTextComponent
              title="Thành phần"
              text={plant?.ingredient}
              icon={<Category2 size={24} color={colors.black} />}
            />
          </SectionComponent>
          <SectionComponent>
            <CardTextComponent
              title="Mô tả"
              text={plant?.description}
              icon={<Book size={24} color={colors.black} />}
            />
          </SectionComponent>

          <SectionComponent>
            <CardTextComponent
              title="Công dụng"
              text={plant?.uses}
              icon={<SunFog size={24} color={colors.black} />}
            />
          </SectionComponent>
          <SectionComponent>
            <CardTextComponent
              title="Công dụng y học"
              text={plant?.medicine}
              icon={<Hospital size={24} color={colors.black} />}
            />
          </SectionComponent>
          <SectionComponent>
            <CardTextComponent
              title="Pha chế thuốc"
              text={plant?.medicine_preparation}
              icon={
                <IconFontAwesome
                  name="stethoscope"
                  size={24}
                  color={colors.black}
                />
              }
            />
          </SectionComponent>
          <SectionComponent>
            <CardTextComponent
              title="Tác dụng phụ"
              text={plant?.effect_medicine}
              icon={
                <IconFeather name="shield-off" size={24} color={colors.black} />
              }
            />
          </SectionComponent>

          <SectionComponent>
            <CardTextComponent
              title="Lưu ý sử dụng"
              text={plant?.note_uses}
              icon={<NoteFavorite size={24} color={colors.black} />}
            />
          </SectionComponent>
          <SpaceComponent height={32} />
        </Container>
      </ImageHeaderScrollView>
    </Container>
  );

  // return (
  //   <Container
  //     back={true}
  //     full={true}
  //     styles={{
  //       backgroundColor: 'transparent',
  //     }}>

  //   </Container>
  // );
};

export default DetailPlantScreen;
