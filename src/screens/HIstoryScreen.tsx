import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {GalleryRemove, ProfileDelete, SearchNormal} from 'iconsax-react-native';
import React, {useCallback, useEffect} from 'react';
import {Alert, FlatList, StatusBar, Text, Touchable, View} from 'react-native';
import {
  getPlantHistory,
  realTimePlantHistory,
  removePlantHistory,
} from '../api/FirebaseService';
import CardComponent from '../components/CardComponent';
import Container from '../components/Container';
import InputComponent from '../components/InputComponent';
import SectionComponent from '../components/SectionComponent';
import {colors} from '../constants/colors';
import {convertTimestampToTimeAgo} from '../utils/timeAgo';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SwipeableFlatList from 'rn-gesture-swipeable-flatlist';
import {TouchableOpacity} from 'react-native-gesture-handler';

const reverseData = (data: PlantDetectType[]) => {
  return data.sort((a: PlantDetectType, b: PlantDetectType) => {
    // Replace 'key' with the actual key you want to sort by
    const keyA = a.timestamp;
    const keyB = b.timestamp;

    if (keyA > keyB) {
      return -1;
    }
    if (keyA < keyB) {
      return 1;
    }
    return 0;
  });
};

const HistoryScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [searchInput, setSearchInput] = React.useState<string>('');
  const [data, setData] = React.useState<PlantDetectType[] | undefined>([]);
  const [filteredData, setFilteredData] = React.useState<
    PlantDetectType[] | undefined
  >([]);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBackgroundColor('rgba(0,0,0,0)');
      StatusBar.setBarStyle('dark-content');

      setSearchInput('');
    }, []),
  );

  useEffect(() => {
    const func = async () => {
      const initData = await getPlantHistory();
      setData(initData);
      setFilteredData(initData);
      realTimePlantHistory(data => {
        setData(reverseData(data));
        setFilteredData(reverseData(data));
      });
    };
    func();
  }, []);

  useEffect(() => {
    if (searchInput === '') {
      setFilteredData(data);
    } else {
      const filtered = data?.filter(
        item =>
          item.common_name.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.scientific_name
            .toLowerCase()
            .includes(searchInput.toLowerCase()),
      );
      setFilteredData(filtered);
    }
  }, [searchInput]);

  return (
    <Container>
      <SectionComponent>
        <InputComponent
          clear
          icon={<SearchNormal size={24} color={colors.decs} />}
          placeholder="Search plant"
          styles={{
            paddingVertical: 8,
          }}
          value={searchInput}
          onChange={(text: string) => setSearchInput(text)}
        />
      </SectionComponent>

      <SwipeableFlatList
        renderRightActions={item => {
          return (
            <SectionComponent>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert(
                    'Delete',
                    'Are you sure you want to delete this item?',
                    [
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      },
                      {
                        text: 'OK',
                        onPress: () => {
                          filteredData?.splice(filteredData?.indexOf(item), 1);
                          removePlantHistory(item);
                        },
                      },
                    ],
                  );
                }}
                style={{
                  backgroundColor: colors.red,
                  width: 80,
                  height: '100%',
                  justifyContent: 'center',
                  marginLeft: -8,
                  borderTopRightRadius: 12,
                  borderBottomRightRadius: 12,
                  alignItems: 'center',
                }}>
                <GalleryRemove size={32} color={colors.white} />
              </TouchableOpacity>
            </SectionComponent>
          );
        }}
        data={filteredData}
        style={{}}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          if (filteredData === null) {
            return <></>;
          }

          const marginbottom =
            index === (filteredData?.length ?? 0) - 1 ? 16 : 16;
          return (
            <SectionComponent marginBottom={marginbottom}>
              <CardComponent
                onPress={() => {
                  navigation.navigate('DetailPlant', {plant: item});
                }}
                title={item.common_name}
                desc={item.scientific_name}
                time={convertTimestampToTimeAgo(item.timestamp)}
                type="large"
                image={item.image_url}
              />
            </SectionComponent>
          );
        }}
      />
    </Container>
  );
};

export default HistoryScreen;
