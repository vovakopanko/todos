import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MAIN_ROUTES} from '../../../constants';
import {TabNavigator} from './tab-navigator';

const Stack = createNativeStackNavigator();

export const Private = () => {
  return (
    <Stack.Navigator
      initialRouteName={MAIN_ROUTES.TAB_BAR}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={MAIN_ROUTES.TAB_BAR} component={TabNavigator} />
    </Stack.Navigator>
  );
};
