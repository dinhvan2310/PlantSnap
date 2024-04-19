import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import Container from '../components/Container';
import DescComponent from '../components/DescComponent';
import HorizontalRuleComponent from '../components/HorizontalRuleComponent';
import InputComponent from '../components/InputComponent';
import RowComponent from '../components/RowComponent';
import SectionComponent from '../components/SectionComponent';
import SpaceComponent from '../components/SpaceComponent';
import TitleComponent from '../components/TitleComponent';
import {colors} from '../constants/colors';
import {Facebook, Google, Lock} from 'iconsax-react-native';
import auth from '@react-native-firebase/auth';
import {onFacebookButtonPress, onGoogleButtonPress} from './authContext';

interface SignInScreenProps {
  navigation: any;
  text?: string;
  onPress?: () => void;
  textStyle?: object;
  style?: object;
}

const SignInScreen = (props: SignInScreenProps) => {
  const {navigation, text, onPress, textStyle, style} = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorText('Please enter your email and password!!!');
    } else {
      setErrorText('');
      setIsLoading(true);
      try {
        const userCredential = await auth().signInWithEmailAndPassword(
          email,
          password,
        );
        const user = userCredential.user;

        if (user) {
          console.log(user);
        }

        setIsLoading(false);
      } catch (error: any) {
        setErrorText(error.message);
        setIsLoading(false);
      }
    }
  };

  return (
    <Container>
      <ScrollView>
        <SectionComponent
          styles={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TitleComponent title="Sign In" />
        </SectionComponent>
        <SectionComponent
          styles={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <DescComponent text="It was popularised in the 1960s with the release of Letraset sheetscontaining Lorem Ipsum." />
        </SectionComponent>

        <SectionComponent>
          <RowComponent
            styles={{
              marginTop: 16,
            }}>
            <ButtonComponent
              text="Facebook"
              textStyle={{
                fontFamily: 'Medium',
              }}
              icon={<Facebook size={24} color={'#1877F2'} />}
              onPress={() => {
                onFacebookButtonPress().then(() => {
                  console.log('Facebook sign-in successful');
                });
              }}
            />
            <SpaceComponent width={16} />
            <ButtonComponent
              text="Google"
              textStyle={{
                fontFamily: 'Medium',
              }}
              icon={<Google size={24} color={'#DB4437'} />}
              onPress={() => {
                onGoogleButtonPress().then(() => {
                  console.log('Google sign-in successful');
                });
              }}
            />
          </RowComponent>
        </SectionComponent>
        <SectionComponent>
          <HorizontalRuleComponent text={'Or'} />
        </SectionComponent>
        <SectionComponent>
          <SectionComponent>
            <InputComponent
              onChange={val => {
                setEmail(val);
                setErrorText('');
              }}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
            />
          </SectionComponent>
          <SectionComponent>
            <InputComponent
              placeholder={'Password'}
              isPassword={true}
              value={password}
              onChange={val => {
                setPassword(val);
                setErrorText('');
              }}
            />
          </SectionComponent>
          <SectionComponent>
            {errorText ? (
              <Text style={{color: 'red', marginBottom: 10}}>{errorText}</Text>
            ) : null}
          </SectionComponent>
          <SectionComponent
            styles={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('ForgetPass')}>
              <DescComponent
                text="Forget Password?"
                size={12}
                color={colors.decs}
                lineHeight={22}
              />
            </TouchableOpacity>
          </SectionComponent>
        </SectionComponent>
        <SectionComponent>
          <ButtonComponent
            isLoading={isLoading}
            text="Sign In"
            onPress={handleLogin}
            textStyle={{
              fontFamily: 'Medium',
            }}
          />
        </SectionComponent>
        <SectionComponent>
          <RowComponent>
            <DescComponent text="Don’t have account? " />
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <DescComponent text="Sign Up" color={colors.primary} />
            </TouchableOpacity>
          </RowComponent>
        </SectionComponent>
      </ScrollView>
    </Container>
  );
};

export default SignInScreen;
