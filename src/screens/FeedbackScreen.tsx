import React, {useState} from 'react';
import Container from '../components/Container';
import TitleComponent from '../components/TitleComponent';
import DescComponent from '../components/DescComponent';
import CardTextComponent from '../components/CardTextComponent';
import SpaceComponent from '../components/SpaceComponent';
import CheckboxComponent from '../components/CheckboxComponent';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';
import {FeedbackType} from '../types/feedback';
import {sendFeedback} from '../api/FirebaseService';

const FeedbackScreen = ({route, navigation}: any) => {
  const [feedback, setFeedback] = useState('');
  const [detectedIncorrectly, setDetectedIncorrectly] = useState(false);
  const [statusIncorrect, setStatusIncorrect] = useState(false);
  const [descriptionIncorrect, setDescriptionIncorrect] = useState(false);
  const [other, setOther] = useState(false);
  const [plantId, setPlantId] = useState<number>(-1);

  console.log('Route:', route.params);

  React.useEffect(() => {
    const plantId = route.params?.plantId;
    if (plantId) {
      setPlantId(plantId);
    }
  }, [route]);

  return (
    <Container styles={{}}>
      <TitleComponent title="What is your feedback?" color="black" size={28} />
      <DescComponent
        style={{
          marginBottom: 32,
        }}
        text="Please share your problem. We value all feedback and use it to improve our services."
      />

      <CheckboxComponent
        style={{
          marginBottom: 16,
        }}
        text="Plant detected incorrectly"
        size={16}
        onPress={() => setDetectedIncorrectly(!detectedIncorrectly)}
      />
      <CheckboxComponent
        style={{
          marginBottom: 16,
        }}
        text="Plant status is incorrect"
        size={16}
        onPress={() => setStatusIncorrect(!statusIncorrect)}
      />
      <CheckboxComponent
        style={{
          marginBottom: 16,
        }}
        text="Plant description is incorrect"
        size={16}
        onPress={() => setDescriptionIncorrect(!descriptionIncorrect)}
      />
      <CheckboxComponent
        style={{
          marginBottom: 32,
        }}
        text="Other"
        size={16}
        onPress={() => setOther(!other)}
      />
      <InputComponent
        multiple={true}
        value={feedback}
        onChange={setFeedback}
        placeholder="Please describe your problem"
        styles={{
          marginBottom: 32,
        }}
      />

      <ButtonComponent
        onPress={() => {
          console.log('Submit');
          console.log('Detected incorrectly:', detectedIncorrectly);
          console.log('Status incorrect:', statusIncorrect);
          console.log('Description incorrect:', descriptionIncorrect);
          console.log('Other:', other);
          console.log('Feedback:', feedback);

          const feedbackdata: FeedbackType = {
            timestamp: Date.now(),
            feedback: feedback,
            detectedIncorrectly: detectedIncorrectly,
            statusIncorrect: statusIncorrect,
            descriptionIncorrect: descriptionIncorrect,
            other: other,
            plantid: plantId,
          };
          sendFeedback(feedbackdata);
          navigation.goBack();
        }}
        buttonStyle={{
          flex: 0,
        }}
        text="Submit"
      />
    </Container>
  );
};

export default FeedbackScreen;
