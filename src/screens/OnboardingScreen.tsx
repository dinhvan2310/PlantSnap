import React, {useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Lottie from 'lottie-react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {setItem} from '../utils/asyncStorage';
import auth from '@react-native-firebase/auth';

const CustomButton = ({...props}: any) => (
  <TouchableOpacity {...props} style={styles.doneButton}>
    <Text
      style={{
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
      }}>
      Done
    </Text>
  </TouchableOpacity>
);

const {width} = Dimensions.get('window');
const OnboardingScreen = ({navigation}: any) => {
  const handleDone = async () => {
    await setItem('onboarding', 'true');

    // await auth().signOut();

    const user = auth().currentUser;
    if (!user) {
      navigation.navigate('Auth');
      return;
    }
    navigation.navigate('Root');
  };

  return (
    <View style={styles.container}>
      <Onboarding
        DoneButtonComponent={CustomButton}
        bottomBarHighlight={false}
        onDone={handleDone}
        onSkip={handleDone}
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <Lottie
                style={styles.lottie}
                source={require('../assets/animations/firstOnboarding.json')}
                autoPlay
                loop
              />
            ),
            title: 'Welcome to PlanSnap',
            subtitle: 'Identify any plant with your phone',
            subTitleStyles: {
              letterSpacing: 1,
              lineHeight: 24,
              fontSize: 14,
            },
          },
          {
            backgroundColor: '#fff',
            image: (
              <Lottie
                style={styles.lottie}
                source={require('../assets/animations/secondOnboarding.json')}
                autoPlay
                loop
              />
            ),
            title: 'Ultimate Plant Identifier',
            subtitle: (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    letterSpacing: 1,
                    lineHeight: 24,
                    fontSize: 14,
                  }}>
                  Diagnosis plant health checker
                </Text>
                <Text
                  style={{
                    letterSpacing: 1,
                    lineHeight: 24,
                    fontSize: 14,
                  }}>
                  Useful Information & Tips
                </Text>
              </View>
            ),
            subTitleStyles: {
              letterSpacing: 1,
              lineHeight: 24,
            },
          },
          {
            backgroundColor: '#fff',
            image: (
              <Lottie
                style={styles.lottie}
                source={require('../assets/animations/thirdOnboarding.json')}
                autoPlay
                loop
              />
            ),
            title: 'Help Us Grow',
            subtitle: 'Show your love by giving us a review on the PlayStore',
            subTitleStyles: {
              fontSize: 14,
              letterSpacing: 0,
              lineHeight: 24,
            },
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
});

export default OnboardingScreen;

// ẩn tab bar khi vào màn hình camera
