import auth from '@react-native-firebase/auth';
import {
  Book,
  Camera,
  Home,
  SearchNormal1,
  Setting2,
} from 'iconsax-react-native';
import React, {useEffect} from 'react';
import {Animated, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import {CurvedBottomBarExpo} from 'react-native-curved-bottom-bar';
import {colors} from '../constants/colors';
import CameraScreen from '../screens/CameraScreen';
import HistoryScreen from '../screens/HIstoryScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingScreen from '../screens/SettingScreen';

export default function RootNav({navigation}: any) {
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

  const _renderIcon = (routeName: any, selectedTab: any) => {
    let icon = '';

    switch (routeName) {
      case 'Home':
        // icon = 'settings-outline';
        return (
          <Home
            size={24}
            color={selectedTab === 'Home' ? colors.primary : colors.gray}
          />
        );
      case 'Search':
        return (
          <SearchNormal1
            size={24}
            color={selectedTab === 'Search' ? colors.primary : colors.gray}
          />
        );
      case 'History':
        return (
          <Book
            size={24}
            color={selectedTab === 'History' ? colors.primary : colors.gray}
          />
        );
      case 'Setting':
        return (
          <Setting2
            size={24}
            color={selectedTab === 'Setting' ? colors.primary : colors.gray}
          />
        );
    }
  };
  const renderTabBar = ({routeName, selectedTab, navigate}: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBarExpo.Navigator
      type="DOWN"
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={55}
      circleWidth={50}
      bgColor={colors.white2}
      initialRouteName="Home"
      borderTopLeftRight
      renderCircle={({selectedTab, navigate}) => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate('Camera')}>
            <Camera size={24} color={colors.primary} />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}>
      <CurvedBottomBarExpo.Screen
        name="Home"
        position="LEFT"
        component={() => <HomeScreen />}
        options={{
          headerShown: false,
        }}
      />
      <CurvedBottomBarExpo.Screen
        name="Search"
        component={() => <SearchScreen />}
        position="LEFT"
        options={{
          headerShown: false,
        }}
      />
      <CurvedBottomBarExpo.Screen
        name="History"
        position="RIGHT"
        component={() => <HistoryScreen />}
        options={{
          headerShown: false,
        }}
      />
      <CurvedBottomBarExpo.Screen
        name="Setting"
        position="RIGHT"
        component={() => <SettingScreen />}
        options={{
          headerShown: false,
        }}
      />
      <CurvedBottomBarExpo.Screen
        name="Camera"
        position="CENTER"
        component={() => <CameraScreen />}
        options={{
          headerShown: false,
        }}
      />
    </CurvedBottomBarExpo.Navigator>
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
