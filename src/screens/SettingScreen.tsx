import React from 'react';
import {getPlantDirectory} from '../api/LeafClassification';
import ButtonComponent from '../components/ButtonComponent';
import Container from '../components/Container';
import SectionComponent from '../components/SectionComponent';
import axios from 'axios';

const SettingScreen = () => {
  const func = async () => {
    const data = await axios.post('http://192.168.1.18:5000/detect', {
      image:
        'https://firebasestorage.googleapis.com/v0/b/plantsnap-419307.appspot.com/o/Directory%2Fcachua.jpg?alt=media&token=4610126c-a468-4e6f-9ac1-ca115999fafc',
    });
  };

  const func2 = async () => {
    const data = await axios.get(
      'http://192.168.1.18:5000/get-plant-directory',
    );
    console.log(data.data);
  };

  return (
    <Container>
      <SectionComponent
        styles={{
          height: 200,
        }}>
        <ButtonComponent text="press3" />
      </SectionComponent>
      <SectionComponent
        styles={{
          height: 200,
        }}>
        <ButtonComponent onPress={func2} text="press2" />
      </SectionComponent>
    </Container>
  );
};

export default SettingScreen;
