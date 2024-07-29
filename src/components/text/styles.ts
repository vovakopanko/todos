import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  container: {
    color: COLORS.BLACK,
    fontSize: 18,
    lineHeight: 24,
  },
  300: {
    fontFamily: 'Figtree-Light',
  },
  400: {
    fontFamily: 'Figtree-Regular',
  },
  500: {
    fontFamily: 'Figtree-Medium',
  },
  600: {
    fontFamily: 'Figtree-SemiBold',
  },
  700: {
    fontFamily: 'Figtree-Bold',
  },
  800: {
    fontFamily: 'Figtree-ExtraBold',
  },
  900: {
    fontFamily: 'Figtree-Black',
  },
});

export {styles};
