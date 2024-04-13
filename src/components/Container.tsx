import React from 'react';
import {ScrollView, StatusBar, View, ViewStyle} from 'react-native';
import {colors} from '../constants/colors';
import propTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';

interface ContainerProps {
  title?: string;
  back?: boolean;
  right?: boolean;
  children: React.ReactNode;
  isScroll?: boolean;
  styles?: ViewStyle;
  statusBarColor?: string;
}

const Container = (props: ContainerProps) => {
  const {
    title,
    back,
    right,
    children,
    isScroll = true,
    styles,
    statusBarColor = colors.white,
  } = props;

  const navigation = useNavigation();
  // React.useEffect(() => {
  //   {
  //     console.log('statusBarColor', statusBarColor);
  //     StatusBar.setBackgroundColor('transparent');
  //     StatusBar.setTranslucent(false);
  //   }
  // }, []);
  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: colors.white,
          paddingHorizontal: 16,
          paddingTop: 52,
        },
        styles,
      ]}>
      {/* Header container */}

      {/* <RowComponent
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
        <View style={{flex: 1, zIndex: -1}}>
          {title && (
            <TextComponent
              flex={0}
              fontFamily={fontFamilies.PoppinsBold}
              size={16}
              text={title}
              textStyles={{textAlign: 'center', marginLeft: back ? -24 : 0}}
            />
          )}
        </View>
      </RowComponent> */}
      {isScroll ? (
        <ScrollView
          style={{flex: 1, flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      ) : (
        <View style={{flex: 1}}>{children}</View>
      )}
    </View>
  );
};

Container.propTypes = {
  title: propTypes.string,
  back: propTypes.bool,
  right: propTypes.bool,
  children: propTypes.node,
  isScroll: propTypes.bool,
  styles: propTypes.object,
};

export default Container;
