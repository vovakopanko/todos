import React from 'react';
import {StatusBar, ViewStyle} from 'react-native';
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';

import {styles} from './styles';
import {COLORS} from '../../constants';

interface Props extends SafeAreaViewProps {
  barStyle?: 'dark-content' | 'light-content';
  backgroundColor?: COLORS.WHITE;
  containerStyle?: ViewStyle;
}

export const SafeAreaViewContainer = ({
  children,
  barStyle = 'dark-content',
  backgroundColor = COLORS.WHITE,
  containerStyle,
  ...rest
}: Props) => {
  return (
    <SafeAreaView style={[styles.fullScreen, containerStyle]} {...rest}>
      <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
      {children}
    </SafeAreaView>
  );
};
