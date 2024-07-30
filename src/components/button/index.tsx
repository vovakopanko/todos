import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  TextStyle,
  ButtonProps,
  GestureResponderEvent,
  View,
} from 'react-native';

import {Spacer} from '../spacer';
import {styles} from './styles';
import {COLORS} from '../../constants';
import {Text} from '../text';

export enum BUTTON_TYPE {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  LINK = 'link',
  DISABLED = 'disabled',
}

interface Props extends ButtonProps {
  title: string;
  onPress?: (e: GestureResponderEvent) => void;
  type?: BUTTON_TYPE;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ElementType;
  endIcon?: React.ElementType;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  activeOpacity?: number;
}

export const Button = ({
  title,
  onPress = () => {},
  type = BUTTON_TYPE.PRIMARY,
  disabled = false,
  loading = false,
  icon: Icon,
  endIcon: EndIcon,
  containerStyle,
  textStyle,
  activeOpacity = 0.8,
}: Props) => (
  <TouchableOpacity
    activeOpacity={activeOpacity}
    onPress={onPress}
    style={[styles.container, styles[type], containerStyle]}
    disabled={disabled || loading}>
    {loading ? (
      <ActivityIndicator color={COLORS.WHITE} />
    ) : (
      <>
        {Icon && (
          <View style={styles.icon}>
            <Icon />
          </View>
        )}
        {EndIcon && <Spacer width={16} />}
        <Text
          fontWeight={type === BUTTON_TYPE.LINK ? 500 : 600}
          style={[
            type === BUTTON_TYPE.LINK ? styles.textLink : styles.text,
            textStyle,
          ]}>
          {title}
        </Text>
        {EndIcon && (
          <View style={[styles.icon, styles.endIcon]}>
            <EndIcon />
          </View>
        )}
      </>
    )}
  </TouchableOpacity>
);
