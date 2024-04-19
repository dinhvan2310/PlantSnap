import {View, Text} from 'react-native';
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import Container from '../components/Container';
import ButtonComponent from '../components/ButtonComponent';
import SectionComponent from '../components/SectionComponent';

const SettingScreen = () => {
  return (
    <Container>
      <SectionComponent
        styles={{
          flex: 1,
        }}>
        <ButtonComponent
          buttonStyle={{}}
          text="Select Image"
          onPress={() =>
            ImagePicker.openPicker({
              cropping: true,
            }).then(image => {
              console.log(image);
            })
          }
        />
      </SectionComponent>
      <SectionComponent
        styles={{
          flex: 1,
        }}>
        <ButtonComponent
          buttonStyle={{}}
          text="Take Image"
          onPress={() =>
            ImagePicker.openCamera({
              cropperToolbarTitle: 'Dectect Plant',
              useFrontCamera: false,
              freeStyleCropEnabled: true,
              cropping: true,
            }).then(image => {
              console.log(image);
            })
          }
        />
      </SectionComponent>
    </Container>
  );
};

export default SettingScreen;
