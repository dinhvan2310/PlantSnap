import {ArrowDown2, ArrowUp, ArrowUp2} from 'iconsax-react-native';
import React, {ReactNode, useState} from 'react';
import {Text, Touchable, View} from 'react-native';
import {colors} from '../constants/colors';
import RowComponent from './RowComponent';
import SpaceComponent from './SpaceComponent';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface CardTextComponentProps {
  title: string;
  text?: string;
  icon?: ReactNode;
}
const CardTextComponent = (props: CardTextComponentProps) => {
  const {title, text, icon} = props;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    console.log('toggleText');
    setIsExpanded(!isExpanded);
  };

  return (
    <View
      style={{
        borderWidth: 0.2,
        borderColor: colors.gray,
        padding: 16,
        borderRadius: 8,
        backgroundColor: colors.white,
      }}>
      <RowComponent justify="space-between" onPress={toggleText}>
        <RowComponent justify="flex-start">
          {icon}
          {icon && <SpaceComponent width={12} />}
          <Text
            style={{
              color: colors.black,
              fontSize: 18,
              fontWeight: '500',
              lineHeight: 24,
            }}>
            {title}
          </Text>
        </RowComponent>
        {isExpanded ? (
          <ArrowUp2 size={24} color={colors.black} />
        ) : (
          <ArrowDown2 size={24} color={colors.black} />
        )}
      </RowComponent>
      {/* <SpaceComponent height={12} /> */}
      {isExpanded && (
        <>
          <SpaceComponent height={12} />
          <Text
            style={{
              color: colors.gray,
              fontSize: 16,
              fontFamily: 'Regular',
              lineHeight: 24,
              overflow: 'hidden',
            }}>
            {text}
          </Text>
          <SpaceComponent height={12} />
        </>
      )}
    </View>
  );
};

export default CardTextComponent;
