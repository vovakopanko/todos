import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  label: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  input: {
    height: 48,
    backgroundColor: COLORS.WHITE,
    fontSize: 16,
    fontFamily: 'Figtree-Regular',
    paddingHorizontal: 16,
    color: COLORS.BLACK,
    borderWidth: 2,
    borderColor: COLORS.BORDER_COLOR,
    borderRadius: 8,
  },
  inputSolid: {
    backgroundColor: COLORS.LIGHT_GRAY,
    borderColor: COLORS.LIGHT_GRAY,
  },
  inputLefPadding: {
    paddingLeft: 32,
  },
  inputRightPadding: {
    paddingRight: 48,
  },
  inputError: {
    borderColor: COLORS.ERROR,
    borderWidth: 3,
  },
  icon: {
    position: 'absolute',
    left: 12,
  },
  eye: {
    position: 'absolute',
    right: 16,
  },
  textPosition: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomInfo: {
    fontSize: 12,
    lineHeight: 14,
    color: COLORS.INPUT_DETAILS,
    paddingTop: 3,
  },
});

export {styles};
