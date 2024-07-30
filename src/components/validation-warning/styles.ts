import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  warningContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingLeft: 2,
  },
  warningText: {
    marginLeft: 4,
    color: COLORS.ERROR,
    fontSize: 14,
    lineHeight: 20,
  },
});

export {styles};
