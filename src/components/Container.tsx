import {useNavigation} from '@react-navigation/native';
import {ArrowLeft2} from 'iconsax-react-native';
import React from 'react';
import {TouchableOpacity, View, ViewStyle} from 'react-native';
import {colors} from '../constants/colors';
import RowComponent from './RowComponent';

interface ContainerProps {
  back?: boolean;
  paddingTop?: number;
  children: React.ReactNode;
  styles?: ViewStyle;
  full?: boolean;
  statusBarColor?: string;
  backColor?: string;
}

const Container = (props: ContainerProps) => {
  const {back, children, styles, full, paddingTop, backColor} = props;

  const navigation = useNavigation();

  if (full) {
    return (
      <View
        style={[
          {
            flex: 1,
            backgroundColor: colors.white,
            paddingTop: paddingTop || 0,
          },
          ,
          styles,
        ]}>
        <View style={{flex: 1}}>{children}</View>

        {back && (
          <RowComponent
            styles={{
              paddingHorizontal: 16,
              paddingBottom: 16,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 38,
            }}>
            {back && (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeft2 size={24} color={backColor ?? colors.secondary} />
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
            alignItems: 'center',
          }}>
          {back && (
            <TouchableOpacity
              style={{
                position: 'absolute',
                left: 16,
              }}
              onPress={() => navigation.goBack()}>
              <ArrowLeft2 size={24} color={backColor ?? colors.secondary} />
            </TouchableOpacity>
          )}
        </RowComponent>
      )}

      <View style={{flex: 1}}>{children}</View>
    </View>
  );
};

export default Container;
