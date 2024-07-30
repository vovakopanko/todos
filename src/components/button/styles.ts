import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderWidth: 1,
    height: 48,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  primary: {
    backgroundColor: COLORS.MAIN,
    borderColor: COLORS.MAIN,
  },
  secondary: {
    backgroundColor: COLORS.BLACK,
    borderColor: COLORS.BLACK,
  },
  disabled: {
    backgroundColor: COLORS.DISABLED,
    borderColor: COLORS.DISABLED,
  },
  link: {
    height: 'auto',
    borderWidth: 0,
    paddingHorizontal: 0,
    justifyContent: 'flex-start',
    alignSelf: 'baseline',
  },
  text: {
    color: COLORS.WHITE,
    fontSize: 16,
  },
  textLink: {
    color: COLORS.MAIN,
    fontSize: 14,
  },
  icon: {
    marginRight: 8,
  },
  endIcon: {
    marginLeft: 16,
    paddingBottom: 5,
  },
});

export {styles};
