import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {HeaderOptionsProps} from '../../navigation/types';
import {ArrowIcon} from '../../assets/common';

export const BackButton = ({navigation}: HeaderOptionsProps) =>
  navigation.canGoBack() ? (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.goBack()}>
      <ArrowIcon />
    </TouchableOpacity>
  ) : null;

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
  },
});
