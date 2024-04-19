import React from 'react';
import {
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {colors} from '../constants/colors';
import propTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import RowComponent from './RowComponent';
import {ArrowLeft2} from 'iconsax-react-native';
import DescComponent from './DescComponent';

interface ContainerProps {
  back?: boolean;
  paddingTop?: number;
  children: React.ReactNode;
  styles?: ViewStyle;
  full?: boolean;
  statusBarColor?: string;
}

const Container = (props: ContainerProps) => {
  const {back, children, styles, full, paddingTop} = props;

  const navigation = useNavigation();

  if (full) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
          paddingTop: paddingTop || 0,
        }}>
        <View style={{flex: 1}}>{children}</View>

        {back && (
          <RowComponent
            styles={{
              paddingHorizontal: 16,
              paddingBottom: 16,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 52,
            }}>
            {back && (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeft2 size={24} color={colors.secondary} />
              </TouchableOpacity>
            )}
          </RowComponent>
        )}
      </View>
    );
  }
  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: colors.white,
          paddingHorizontal: 16,
          paddingTop: paddingTop ?? 52,
        },
        styles,
      ]}>
      {/* Header container */}

      {back && (
        <RowComponent
          styles={{
            paddingHorizontal: 16,
            paddingBottom: 16,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {back && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeft2 size={24} color={colors.white} />
            </TouchableOpacity>
          )}
        </RowComponent>
      )}

      <View style={{flex: 1}}>{children}</View>
    </View>
  );
};

export default Container;
