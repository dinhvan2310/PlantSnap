import React from 'react';
import {Image, TouchableOpacity, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '../constants/colors';
import DescComponent from './DescComponent';
import SectionComponent from './SectionComponent';
import TitleComponent from './TitleComponent';
import RowComponent from './RowComponent';
import SpaceComponent from './SpaceComponent';

interface CardComponentProps {
  title: string;
  desc: string;
  time?: string;
  type: 'small' | 'large';
  image: string;
  bookmark?: boolean;
  onPress?: () => void;
  styles?: ViewStyle;
}

const NOTFOUNDIMAGE =
  'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg';

const CardComponent = (props: CardComponentProps) => {
  const {title, desc, image, bookmark, onPress, time, type, styles} = props;
  if (type === 'small') {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          {
            flex: 1,
            borderRadius: 12,
            height: 154,
            backgroundColor: colors.white,
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.16,
            shadowRadius: 1.51,
            elevation: 2,
          },
          styles,
        ]}>
        <Image
          source={{
            uri: image ?? NOTFOUNDIMAGE,
          }} // Change this line
          style={{
            height: 94,
            width: '100%',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        />
        <SectionComponent marginTop={4}>
          <DescComponent
            text={title}
            size={16}
            style={{
              paddingHorizontal: 8,
              fontWeight: '700',
            }}
          />
          <DescComponent text={desc} size={12} style={{paddingHorizontal: 8}} />
          {bookmark && (
            <View
              style={{
                position: 'absolute',
                top: -16,
                right: 8,
                padding: 6,
                zIndex: 1,
                backgroundColor: colors.white,
                borderRadius: 100,
                shadowColor: '#000000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.15,
                shadowRadius: 1.0,
                elevation: 1,
              }}>
              {/* <Bookmark2 color={colors.gray} size={18} style={{}} /> */}
              <Icon name="bookmark" size={16} color={colors.gray} />
            </View>
          )}
        </SectionComponent>
      </TouchableOpacity>
    );
  } else if (type === 'large') {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flex: 1,
          borderRadius: 12,
          backgroundColor: colors.white,
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.16,
          shadowRadius: 1.51,
          elevation: 2,
        }}>
        <RowComponent styles={{}}>
          <Image
            source={{
              uri: image ?? NOTFOUNDIMAGE,
            }} // Change this line
            style={{
              height: 97,
              width: 97,
              borderRadius: 12,
            }}
          />
          <SpaceComponent width={16} />
          <SectionComponent
            styles={{
              flex: 1,
              height: '100%',
              justifyContent: 'space-evenly',
              marginBottom: 0,
            }}>
            <View>
              <DescComponent
                text={title}
                size={16}
                style={{
                  paddingHorizontal: 8,
                  fontWeight: '700',
                }}
              />
              <DescComponent
                text={desc}
                size={14}
                style={{paddingHorizontal: 8}}
              />
            </View>
            <DescComponent
              text={time ?? 'April 12, 2021'}
              size={12}
              style={{paddingHorizontal: 8, fontWeight: '400'}}
            />
            {bookmark && (
              <View
                style={{
                  position: 'absolute',
                  top: -16,
                  right: 8,
                  padding: 6,
                  zIndex: 1,
                  backgroundColor: colors.white,
                  borderRadius: 100,
                  shadowColor: '#000000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.15,
                  shadowRadius: 1.0,
                  elevation: 1,
                }}>
                {/* <Bookmark2 color={colors.gray} size={18} style={{}} /> */}
                <Icon name="bookmark" size={16} color={colors.gray} />
              </View>
            )}
          </SectionComponent>
        </RowComponent>
      </TouchableOpacity>
    );
  }
};

export default CardComponent;
