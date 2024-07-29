import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../../../../screens/onboarding/login';
import {Register} from '../../../../screens/onboarding/register';
import {ROUTES} from '../../../constants';
import {headerOptions} from './options';

const Stack = createStackNavigator();

export const Public = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.LOGIN}
      screenOptions={headerOptions}>
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
    </Stack.Navigator>
  );
};
