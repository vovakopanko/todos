import React from 'react';
import {useRef} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {Private} from './partials/private';
import {Public} from './partials/public';
import {useUserStore} from '../../store/useUserStore';

const config = {
  screens: {},
};

const linking = {
  prefixes: [],
  config: config,
};

export const Router = () => {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<string>();

  const isLoggedIn = useUserStore(state => state.isLoggedIn);

  return (
    <NavigationContainer
      ref={navigationRef}
      linking={linking}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute()?.name;
      }}
      onStateChange={() => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute()?.name;

        if (currentRouteName && previousRouteName !== currentRouteName) {
          routeNameRef.current = currentRouteName;
          // TODO: add analitics here
        }
      }}>
      {isLoggedIn ? <Private /> : <Public />}
    </NavigationContainer>
  );
};
