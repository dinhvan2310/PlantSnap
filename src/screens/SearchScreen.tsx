import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SearchNormal} from 'iconsax-react-native';
import React, {useCallback, useEffect} from 'react';
import {FlatList, StatusBar} from 'react-native';
import {getPlantDirectory} from '../api/LeafClassification';
import CardComponent from '../components/CardComponent';
import Container from '../components/Container';
import InputComponent from '../components/InputComponent';
import SectionComponent from '../components/SectionComponent';
import {colors} from '../constants/colors';
import {PlantType} from '../types/plantType';

const NOTFOUND_IMAGE =
  'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg';

const SearchScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  // set status bar
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBackgroundColor('rgba(0,0,0,0)');
      StatusBar.setBarStyle('dark-content');

      setSearchInput('');
    }, []),
  );

  // state
  const [data, setData] = React.useState<PlantType[]>([]);
  const [filteredData, setFilteredData] = React.useState<PlantType[]>([]);
  const [searchInput, setSearchInput] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);

  // fetch data
  React.useEffect(() => {
    const func = async () => {
      // fetch data
      const data = await getPlantDirectory();
      setFilteredData(data);
      setData(data);
    };
    func();
  }, []);

  useEffect(() => {
    if (searchInput === '') {
      setFilteredData(data);
    } else {
      const filtered = data?.filter(
        item =>
          item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
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
          clear={true}
          icon={<SearchNormal size={24} color={colors.decs} />}
          placeholder="Search plant"
          onChange={text => {
            setSearchInput(text);
          }}
          styles={{
            paddingVertical: 8,
          }}
          value={searchInput}
        />
      </SectionComponent>

      <FlatList
        numColumns={2}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: 16,
          gap: 16,
        }}
        style={{}}
        data={filteredData}
        renderItem={({item, index}) => {
          if (data === null) {
            return null;
          }
          const marginbottom = index === (data?.length ?? 0) - 1 ? 26 : 0;
          return (
            <CardComponent
              title={item.name}
              desc={item.scientific_name}
              image={item.url_image[0] ?? NOTFOUND_IMAGE}
              bookmark={true}
              styles={{marginBottom: marginbottom}}
              type="small"
              onPress={() => {
                navigation.navigate('DetailPlant', {plant: item});
              }}
            />
          );
        }}
      />
    </Container>
  );
};

export default SearchScreen;
