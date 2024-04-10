import {StyleSheet} from 'react-native';
import {colors} from '../constants/colors';

const globalStyles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.gray,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  tabLabel: {
    paddingHorizontal: 8,
    color: '#676767',
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {globalStyles};
