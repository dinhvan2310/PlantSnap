import React from 'react';
import {Text, View} from 'react-native';
import {colors} from '../constants/colors';

interface HorizontalRuleComponentProps {
  text?: string;
}

const HorizontalRuleComponent = ({text}: HorizontalRuleComponentProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
      }}>
      <View style={{flex: 1, height: 1, backgroundColor: 'rgba(0,0,0,0.2)'}} />
      <View>
        <Text
          style={{
            lineHeight: 22,
            fontFamily: 'Regular',
            textAlign: 'center',
            fontSize: 14,
            width: 40,
            color: 'rgba(0,0,0,0.4)',
          }}>
          {text}
        </Text>
      </View>
      <View style={{flex: 1, height: 1, backgroundColor: 'rgba(0,0,0,0.2)'}} />
    </View>
  );
};

export default HorizontalRuleComponent;
