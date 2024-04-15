import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Platform, StatusBar, StyleSheet} from 'react-native';
import HomeScreen from '../../screens/HomeScreen';
import {useNavigation} from '@react-navigation/native';

interface HomeNavigationProps {
  refTabBar: any;
}
const Stack = createNativeStackNavigator();
const HomeNavigation = () => {
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
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    justifyContent: 'center',
    ...Platform.select({
      android: {
        paddingTop: 40,
      },
    }),
  },
});

export default HomeNavigation;
