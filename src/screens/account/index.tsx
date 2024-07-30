import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '../../components/text';
import {Box} from '../../components/box';
import {Button} from '../../components/button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {STORAGE_KEYS} from '../../constants/storage-keys';
import {useUserStore} from '../../store/useUserStore';
import {windowWidth} from '../../utils/general';

export const Account = () => {
  const clearUser = useUserStore(set => set.clearUser);
  const {firstName, lastName, email} = useUserStore();
  const LogOut = async () => {
    await AsyncStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, '');
    clearUser();
  };

  return (
    <View style={styles.container}>
      <Text fontWeight={700} style={styles.title}>
        User Details
      </Text>
      <View>
        {firstName && (
          <View style={styles.row}>
            <Text fontWeight={700} style={styles.label}>
              First Name:
            </Text>
            <Text fontWeight={500}>{firstName}</Text>
          </View>
        )}
        {lastName && (
          <View style={styles.row}>
            <Text fontWeight={700} style={styles.label}>
              Last Name:
            </Text>
            <Text fontWeight={500}>{lastName}</Text>
          </View>
        )}
        {email && (
          <View style={styles.row}>
            <Text fontWeight={700} style={styles.label}>
              Email:
            </Text>
            <Text fontWeight={500}>{email}</Text>
          </View>
        )}
      </View>
      <Box>
        <Button title="LogOut" onPress={LogOut} />
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  label: {
    minWidth: windowWidth * 0.4,
  },
});

export default Account;
