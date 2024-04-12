import {Eye, EyeSlash} from 'iconsax-react-native';
import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View, ViewStyle} from 'react-native';
import {colors} from '../constants/colors';
import SpaceComponent from './SpaceComponent';

interface InputComponentProps {
  placeholder?: string;
  onChange: (text: string) => void;
  value?: string;
  keyboardType?: 'email-address' | 'numeric' | 'phone-pad' | 'default';
  isPassword?: boolean;
  styles?: ViewStyle;
  icon?: React.ReactNode;
}

const InputComponent = ({
  placeholder,

  onChange,
  value,
  keyboardType,
  isPassword,
  styles,
  icon,
}: InputComponentProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View
      style={[
        {
          backgroundColor: colors.secondary,
          borderRadius: 14,
          paddingHorizontal: 24,
          paddingVertical: 18,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
        styles,
      ]}>
      {icon && icon}
      {icon && <SpaceComponent width={16} />}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
        onChangeText={onChange}
        value={value}
        keyboardType={keyboardType ?? 'default'}
        secureTextEntry={isPassword && !showPassword}
        style={{
          lineHeight: 24,
          fontFamily: 'Regular',
          fontSize: 16,
          flex: 1,
          color: colors.gray,
        }}
      />
      {isPassword && (
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={{
            justifyContent: 'center',
          }}>
          {showPassword ? (
            <EyeSlash size={24} color={colors.primary} />
          ) : (
            <Eye size={24} color={colors.primary} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputComponent;
