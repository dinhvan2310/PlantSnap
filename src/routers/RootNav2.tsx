import auth from '@react-native-firebase/auth';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Book,
  Camera,
  Home2,
  SearchNormal1,
  Setting2,
} from 'iconsax-react-native';
import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors} from '../constants/colors';
import CameraScreen from '../screens/CameraScreen';
import HistoryScreen from '../screens/HistoryScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingScreen from '../screens/SettingScreen';
import HomeNavigation from './navigation/HomeNavigation';
import SearchNavigation from './navigation/SearchNavigation';
import HistoryNavigation from './navigation/HistoryNavigation';
import SettingNavigation from './navigation/SettingNavigation';

const Tab = createBottomTabNavigator();
export default function RootNav2({navigation}: any) {
  StatusBar.setBarStyle('dark-content');
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (!user) {
        navigation.navigate('Auth');
      } else {
        console.log(user);
      }
    });
    return subscriber;
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: false,
        tabBarStyle: {
          backgroundColor: colors.white2,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          borderTopWidth: 0,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -3,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 3,
        },
        tabBarButton: props => {
          return (
            <TouchableOpacity {...props} style={[styles.tabbarItem, {}]}>
              {props.children}
            </TouchableOpacity>
          );
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Home2 size={24} color={focused ? colors.primary : colors.gray} />
            );
          },
        }}
        name="HomeNavigation"
        component={HomeNavigation}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <SearchNormal1
                size={24}
                color={focused ? colors.primary : colors.gray}
              />
            );
          },
        }}
        name="SearchNavigation"
        component={SearchNavigation}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarStyle: {display: 'none'},
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.btnCircleUp}>
                <Camera
                  size={24}
                  color={focused ? colors.primary : colors.gray}
                  style={styles.imgCircle}
                />
              </View>
            );
          },
        }}
        name="CameraNavigation"
        component={CameraScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Book size={24} color={focused ? colors.primary : colors.gray} />
            );
          },
        }}
        name="HistoryNavigation"
        component={HistoryNavigation}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Setting2
                size={24}
                color={focused ? colors.primary : colors.gray}
              />
            );
          },
        }}
        name="SettingNavigation"
        component={SettingNavigation}
      />
    </Tab.Navigator>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white2,
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
});
