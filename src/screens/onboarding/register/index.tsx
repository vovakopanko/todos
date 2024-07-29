import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '../../../components/text';

export const Register = () => {
  return (
    <View style={styles.container}>
      <Text fontWeight={500}>Register</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
