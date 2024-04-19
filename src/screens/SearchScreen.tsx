import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SearchNormal} from 'iconsax-react-native';
import React, {useCallback, useEffect} from 'react';
import {FlatList, StatusBar} from 'react-native';
import {plantDirectory} from '../api/LeafClassification';
import CardComponent from '../components/CardComponent';
import Container from '../components/Container';
import InputComponent from '../components/InputComponent';
import SectionComponent from '../components/SectionComponent';
import {colors} from '../constants/colors';

const NOTFOUNDIMAGE =
  'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg';

const SearchScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBackgroundColor('rgba(0,0,0,0)');
      StatusBar.setBarStyle('dark-content');

      setSearchInput('');
    }, []),
  );

  const [data, setData] = React.useState<PlantDetectType[] | undefined>([]);
  const [filteredData, setFilteredData] = React.useState<
    PlantDetectType[] | undefined
  >([]);
  const [searchInput, setSearchInput] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const func = async () => {
      // fetch data
      const data = await plantDirectory();
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
              title={item.common_name}
              desc={item.scientific_name}
              image={item.image_url}
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
