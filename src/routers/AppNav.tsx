import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {getItem, removeItem} from '../utils/asyncStorage';
import AuthNav from './AuthNav';
import HomeNav from './RootNav';
import OnboardingScreen from '../screens/OnboardingScreen';

const Stack = createNativeStackNavigator();

const AppNav = () => {
  const [isOnboarding, setIsOnboarding] = React.useState<null | boolean>(null);
  React.useEffect(() => {
    const func = async () => {
      try {
        // await removeItem('onboarding');
        const value = await getItem('onboarding');
        if (value == null) {
          setIsOnboarding(true);
        } else {
          setIsOnboarding(false);
        }
      } catch (e) {
        console.log(e);
      }
    };
    func();
  }, []);

  if (isOnboarding === null) {
    return null;
  }

  if (isOnboarding) {
    return (
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Onboarding"
          component={OnboardingScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Auth"
          component={AuthNav}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Root"
          component={HomeNav}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Auth"
        component={AuthNav}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Root"
        component={HomeNav}
      />
    </Stack.Navigator>
  );
};

export default AppNav;