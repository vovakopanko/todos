import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../../../../constants';
import {tabBarHeaderOptions} from '../options';
import {AccountStackNavigatorParamList} from '../../../../types';
import {Account} from '../../../../../screens/account';

const AccountStack =
  createNativeStackNavigator<AccountStackNavigatorParamList>();

export function AccountNav() {
  return (
    <AccountStack.Navigator initialRouteName={ROUTES.ACCOUNT}>
      <AccountStack.Screen
        name={ROUTES.ACCOUNT}
        component={Account}
        options={tabBarHeaderOptions}
      />
    </AccountStack.Navigator>
  );
}
