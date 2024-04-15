import React from 'react';
import {Text, TextStyle, ViewStyle} from 'react-native';
import {colors} from '../constants/colors';

interface DescComponentProps {
  text: string | undefined | null;
  color?: string;
  size?: number;
  fontFamily?: string;
  style?: TextStyle;
  lineHeight?: number;
}

const DescComponent = ({
  text,
  color,
  size,
  fontFamily,
  style,
  lineHeight,
}: DescComponentProps) => {
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
