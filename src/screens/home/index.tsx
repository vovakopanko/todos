import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '../../components/text';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text fontWeight={500}>Home</Text>
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
