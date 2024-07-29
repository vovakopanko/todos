import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../../../../constants';
import {Home} from '../../../../../screens/home';
import {tabBarHeaderOptions} from '../options';
import {HomeStackNavigatorParamList} from '../../../../types';

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

export function HomeNav() {
  return (
    <HomeStack.Navigator initialRouteName={ROUTES.HOME}>
      <HomeStack.Screen
        name={ROUTES.HOME}
        component={Home}
        options={tabBarHeaderOptions}
      />
    </HomeStack.Navigator>
  );
}
