import React from 'react';
import {Text} from 'react-native';
import {colors} from '../constants/colors';

const DescComponent = ({
  text,
  color,
  size,
  fontFamily,
  style,
  lineHeight,
}: any) => {
  return (
    <Text
      style={[
        {
          fontSize: size ?? 14,
          color: color ?? colors.decs,
          fontFamily: fontFamily ?? 'Regular',
          lineHeight: 22,
        },
        style,
      ]}>
      {text}
    </Text>
  );
};

export default DescComponent;
