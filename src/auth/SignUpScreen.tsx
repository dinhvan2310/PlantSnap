import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import CheckboxComponent from '../components/CheckboxComponent';
import Container from '../components/Container';
import DescComponent from '../components/DescComponent';
import HorizontalRuleComponent from '../components/HorizontalRuleComponent';
import InputComponent from '../components/InputComponent';
import RowComponent from '../components/RowComponent';
import SectionComponent from '../components/SectionComponent';
import SpaceComponent from '../components/SpaceComponent';
import TitleComponent from '../components/TitleComponent';
import {colors} from '../constants/colors';
import {Facebook, Google} from 'iconsax-react-native';
import {onFacebookButtonPress, onGoogleButtonPress} from './authContext';
import auth from '@react-native-firebase/auth';

interface SignUpScreenProps {
  navigation: any;
  text?: string;
  onPress?: () => void;
  textStyle?: object;
  style?: object;
}

const SignUpScreen = (props: SignUpScreenProps) => {
  const {navigation, text, onPress, textStyle, style} = props;

  const [fullName, setFullName] = useState(''); // [1
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const [isAccessToService, setIsAccessToService] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateAccount = async () => {
    if (!email) {
      setErrorText('Please enter your email!!!');
    } else if (!password || !confirmPassword) {
      setErrorText('Please enter your password!!!');
    } else if (password !== confirmPassword) {
      setErrorText('Password is not match!!!');
    } else if (password.length < 6) {
      setErrorText('Password must be to 6 characters');
    } else if (!isAccessToService) {
      setErrorText('Please agree to the terms of service and privacy policy');
    } else if (!fullName) {
      setErrorText('Please enter your full name');
    } else {
      setIsLoading(true);
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
          const user = userCredential.user;
          user
            .updateProfile({
              displayName: fullName,
            })
            .then(() => {
              if (user) {
                console.log(user);
                setIsLoading(false);
              }
            });
        })
        .catch(error => {
          setIsLoading(false);
          setErrorText(error.message);
        });
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
          <TitleComponent title="Sign Up" />
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
              placeholder={'Full Name'}
              value={fullName}
              onChange={val => {
                setFullName(val);
                setErrorText('');
              }}
            />
          </SectionComponent>
          <SectionComponent>
            <InputComponent
              placeholder={'Email'}
              keyboardType={'email-address'}
              value={email}
              onChange={val => {
                setEmail(val);
                setErrorText('');
              }}
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
            <InputComponent
              placeholder={'Confirm Password'}
              isPassword={true}
              value={confirmPassword}
              onChange={val => {
                setConfirmPassword(val);
                setErrorText('');
              }}
            />
          </SectionComponent>
          <SectionComponent>
            <CheckboxComponent
              onPress={() => {
                setIsAccessToService(!isAccessToService);
                setErrorText('');
              }}
              text="I’m agree to The Tarms of Service and Privasy Policy"
            />
          </SectionComponent>
        </SectionComponent>
        <SectionComponent>
          {errorText ? (
            <Text style={{color: 'red', marginBottom: 10}}>{errorText}</Text>
          ) : null}
        </SectionComponent>
        <SectionComponent>
          <ButtonComponent
            isLoading={isLoading}
            text="Create Account"
            textStyle={{
              fontFamily: 'Medium',
            }}
            onPress={handleCreateAccount}
          />
        </SectionComponent>
        <SectionComponent>
          <RowComponent>
            <DescComponent text="Do you have account? " />
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <DescComponent text="Sign In" color={colors.primary} />
            </TouchableOpacity>
          </RowComponent>
        </SectionComponent>
      </ScrollView>
    </Container>
  );
};

export default SignUpScreen;
