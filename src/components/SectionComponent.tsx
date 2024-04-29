import PropTypes from 'prop-types';
import React from 'react';
import {View, ViewStyle} from 'react-native';

interface SectionComponentProps {
  children: React.ReactNode;
  styles?: ViewStyle;
  marginBottom?: number;
  marginTop?: number;
  bottomOutlines?: boolean;
}

const SectionComponent = (props: SectionComponentProps) => {
  const {children, styles, marginBottom, marginTop, bottomOutlines} = props;
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
      {bottomOutlines && (
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(0,0,0,0.1)',
            marginTop: 16,
          }}
        />
      )}
    </View>
  );
};

export default SectionComponent;
