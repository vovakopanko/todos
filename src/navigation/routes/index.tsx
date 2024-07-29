import React, {useEffect, useRef, useState} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {Private} from './partials/private';
import {Public} from './partials/public';

const config = {
  screens: {},
};

const linking = {
  prefixes: [],
  config: config,
};

export const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<string>();

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

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
