import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {colors} from '../constants/colors';
import DescComponent from './DescComponent';
import {View} from 'react-native-reanimated/lib/typescript/Animated';
import {ViewStyle} from 'react-native';

interface CheckboxComponentProps {
  text?: string;
  size?: number;
  style: ViewStyle;
  onPress?: () => void;
}

const CheckboxComponent = (props: CheckboxComponentProps) => {
  const [checked, setChecked] = useState(false);
  const {text, size, onPress, style} = props;
  const handleCheckboxPress = () => {
    if (onPress) {
      onPress();
    }
    setChecked(prev => {
      return !prev;
    });
  };

  return (
    <BouncyCheckbox
      style={[
        {
          // marginLeft: 16,
        },
        style,
      ]}
      size={16}
      fillColor={colors.primary}
      unfillColor="#FFFFFF"
      iconStyle={{
        marginRight: 8,
      }}
      textComponent={<DescComponent text={text} size={size ? size : 12} />}
      textStyle={{
        fontFamily: 'Regular',
        fontSize: 12,
        lineHeight: 22,
        color: colors.decs,
        textDecorationLine: 'none',
      }}
      innerIconStyle={{
        borderWidth: 0.5,
      }}
      onPress={handleCheckboxPress}
    />
  );
};

export default CheckboxComponent;
