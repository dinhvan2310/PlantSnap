import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';

interface SectionComponentProps {
  children: React.ReactNode;
  styles?: object;
}

const SectionComponent = (props: SectionComponentProps) => {
  const {children, styles} = props;
  return (
    <View
      style={[
        {
          marginBottom: 16,
        },
        styles,
      ]}>
      {children}
    </View>
  );
};

export default SectionComponent;
