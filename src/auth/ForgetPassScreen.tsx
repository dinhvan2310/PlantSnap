import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Container from '../components/Container';
import SectionComponent from '../components/SectionComponent';
import TitleComponent from '../components/TitleComponent';
import DescComponent from '../components/DescComponent';
import InputComponent from '../components/InputComponent';
import auth from '@react-native-firebase/auth';
import ButtonComponent from '../components/ButtonComponent';
interface ForgetPassScreenProps {
  navigation: any;
}
const ForgetPassScreen = (props: ForgetPassScreenProps) => {
  const {navigation} = props;

  const [email, setEmail] = useState('');
  const [errorText, setErrorText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleForgetPassword = async () => {
    if (!email) {
      setErrorText('Please enter your email!!!');
    } else {
      setIsLoading(true);
      await auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          console.log('Email sent');
          navigation.navigate('SignIn');
          setIsLoading(false);
        })
        .catch(error => {
          console.log(error);
          setErrorText(error.message);
          setIsLoading(false);
        });
    }
  };

  return (
    <Container>
      <SectionComponent
        styles={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TitleComponent title="Forget Password" />
      </SectionComponent>
      <SectionComponent
        styles={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <DescComponent text="It was popularised in the 1960s with the release of Letraset sheetscontaining Lorem Ipsum." />
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
        {errorText ? (
          <Text style={{color: 'red', marginBottom: 10}}>{errorText}</Text>
        ) : null}
      </SectionComponent>
      <SectionComponent>
        <ButtonComponent
          text="Send Email"
          onPress={handleForgetPassword}
          isLoading={isLoading}
        />
      </SectionComponent>
    </Container>
  );
};

export default ForgetPassScreen;
