import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SearchScreen from '../../screens/SearchScreen';
import DetailPlantScreen from '../../screens/DetailPlantScreen';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'react-native';

interface SearchNavigationProps {
  refTabBar: any;
}
const Stack = createNativeStackNavigator();

const SearchNavigation = () => {
  // const navigation = useNavigation();
  // const {refTabBar} = props;
  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', e => {
  //     StatusBar.setBackgroundColor('transparent');
  //     if (refTabBar) {
  //       refTabBar.current.setVisible(true);
  //     }
  //     // ...
  //   });

  //   return unsubscribe;
  // }, []);

  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen options={{}} name="Search" component={SearchScreen} />
      <Stack.Screen
        options={
          {
            // headerShown: true,
          }
        }
        name="DetailPlant"
        component={DetailPlantScreen}
      />
    </Stack.Navigator>
  );
};

export default SearchNavigation;
