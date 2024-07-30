import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StyleSheet, ViewProps} from 'react-native';
import {BottomTabNavigatorParamList, TabBarOptionsProps} from '../../../types';
import {getTabBarIcon, tabBarName} from '../../../utils';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {Text} from '../../../../components/text';
import {COLORS} from '../../../../constants';

export const tabBarHeaderOptions = {
  headerShown: false,
};

interface IconWrapperProps extends ViewProps {
  route?: RouteProp<BottomTabNavigatorParamList>;
  focused: boolean;
}

const IconWrapper = ({route, children, focused}: IconWrapperProps) => (
  <>
    {children}
    <Text
      fontWeight={500}
      style={[
        styles.tabBarLabel,
        {color: focused ? COLORS.MAIN : COLORS.BLACK},
      ]}>
      {route ? tabBarName[route.name] : ''}
    </Text>
  </>
);

export const tabNavigatorOptions = ({
  route,
}: TabBarOptionsProps): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: 'black',
  tabBarInactiveTintColor: 'black',
  tabBarStyle: {
    height: 78,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 0,
    elevation: 0,
  },
  tabBarIcon: ({focused}) => {
    const {Icon} = getTabBarIcon(route);
    return (
      <IconWrapper route={route} focused={focused}>
        <Icon color={focused ? COLORS.MAIN : COLORS.BLACK} />
      </IconWrapper>
    );
  },
});

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 10,
    lineHeight: 10,
    marginTop: 4,
  },
});
