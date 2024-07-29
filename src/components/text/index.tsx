import React from 'react';
import {Text as RNText, TextProps} from 'react-native';
import {styles} from './styles';

interface Props extends TextProps {
  fontWeight?: 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

export const Text = ({fontWeight = 400, children, ...props}: Props) => {
  return (
    <RNText
      {...props}
      style={[styles.container, styles[fontWeight], props.style]}>
      {children}
    </RNText>
  );
};
