import React from 'react';
import {Text} from 'react-native';
import {colors} from '../constants/colors';
import {TextStyle} from 'react-native';

interface TitleComponentProps {
  title: string | number | undefined | null;
  color?: string;
  size?: number;
  fontFamily?: string;
  style?: TextStyle;
}

const TitleComponent = ({
  title,
  color,
  size,
  fontFamily,
  style,
}: TitleComponentProps) => {
  return (
    <Text
      style={[
        {
          fontSize: size ?? 32,
          color: color ?? colors.title,
          fontFamily: fontFamily ?? 'Medium',
          lineHeight: 40,
        },
        style,
      ]}>
      {title}
    </Text>
  );
};

export default TitleComponent;
