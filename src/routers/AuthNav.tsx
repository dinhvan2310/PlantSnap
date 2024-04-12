import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../auth/SignInScreen';
import SignUpScreen from '../auth/SignUpScreen';
import auth from '@react-native-firebase/auth';
import ForgetPassScreen from '../auth/ForgetPassScreen';
import {colors} from '../constants/colors';

const AuthNav = ({navigation}: any) => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('Root');
      } else {
        console.log('no user');
      }
    });
    return subscriber;
  }, []);

  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SignIn"
        component={SignInScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SignUp"
        component={SignUpScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerShadowVisible: false,
        }}
        name="ForgetPass"
        component={ForgetPassScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNav;
