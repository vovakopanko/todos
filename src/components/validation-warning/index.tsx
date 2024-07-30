import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Text} from '../text';
import {ExclamationPointIcon} from '../../assets/icons/common';

interface Props {
  errorMessage?: string;
}

export const ValidationWarning = ({errorMessage}: Props) => {
  if (!errorMessage) {
    return null;
  }

  return (
    <View style={styles.warningContainer}>
      <ExclamationPointIcon />
      <Text style={styles.warningText}>{errorMessage}</Text>
    </View>
  );
};
