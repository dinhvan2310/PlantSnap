import PropTypes from 'prop-types';
import React from 'react';
import {View, ViewStyle} from 'react-native';

interface SectionComponentProps {
  children: React.ReactNode;
  styles?: ViewStyle;
  marginBottom?: number;
  marginTop?: number;
}

const SectionComponent = (props: SectionComponentProps) => {
  const {children, styles, marginBottom, marginTop} = props;
  return (
    <View
      style={[
        {
          marginBottom: marginBottom ?? 16,
          marginTop: marginTop ?? 0,
          flex: 0,
        },
        styles,
      ]}>
      {children}
    </View>
  );
};

export default SectionComponent;
