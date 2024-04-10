import PropTypes from 'prop-types';
import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {colors} from '../constants/colors';
import SpaceComponent from './SpaceComponent';
import convertHexToRGBA from '../utils/convertHexToRGBA';

interface ButtonComponentProps {
  text: string;
  onPress?: () => void;
  icon?: React.ReactNode;
  buttonStyle?: object;
  textStyle?: object;
  backgroundColor?: string;
  textColor?: string;
  isLoading?: boolean;
}
const ButtonComponent = (props: ButtonComponentProps) => {
  const {
    text,
    onPress,
    icon,
    buttonStyle,
    textStyle,
    backgroundColor,
    textColor,
    isLoading,
  } = props;
  return (
    <TouchableOpacity
      disabled={isLoading}
      onPress={onPress}
      style={[
        {
          backgroundColor: isLoading
            ? convertHexToRGBA(colors.primary, 0.8)
            : backgroundColor ??
              (icon ? colors.secondary : convertHexToRGBA(colors.blue, 0.85)),
          paddingVertical: 14,
          paddingHorizontal: 16,
          flexDirection: 'row',
          borderRadius: 14,
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        },
        buttonStyle,
      ]}>
      {isLoading ? (
        <ActivityIndicator color={colors.white} size={21} />
      ) : (
        <>
          {icon && icon}
          {icon && <SpaceComponent width={16} />}
          <Text
            style={[
              {
                color: textColor ?? (icon ? colors.placeholder : colors.white),
                fontSize: 16,
                fontWeight: 500,
                textAlign: 'center',
              },
              textStyle,
            ]}>
            {text}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  icon: PropTypes.node,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default ButtonComponent;
