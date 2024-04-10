import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

interface RowComponentProps {
  children: React.ReactNode;
  justify?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'flex-start'
    | 'flex-end';
  onPress?: () => void;
  styles?: object;
}

const RowComponent = ({
  children,
  justify,
  onPress,
  styles,
}: RowComponentProps) => {
  const style = [
    globalStyles.row,
    {
      justifyContent: justify ?? 'center',
    },
    styles,
  ];
  return onPress ? (
    <TouchableOpacity
      style={style}
      onPress={onPress ? () => onPress() : undefined}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={style}>{children}</View>
  );
};

export default RowComponent;
