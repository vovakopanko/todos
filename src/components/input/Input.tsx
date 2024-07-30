import React, {ForwardedRef, useState} from 'react';
import {View, TextInput, TouchableOpacity, Pressable} from 'react-native';

import {InputProps} from './types';
import {styles} from './styles';
import {COLORS} from '../../constants';
import {ClosedEyeIcon, OpenedEyeIcon} from '../../assets/icons/common';
import {Text} from '../text';
import {ValidationWarning} from '../validation-warning';

export const Input = React.forwardRef(
  (props: InputProps, ref: ForwardedRef<TextInput>) => {
    const {
      containerStyle,
      inputStyle,
      icon: Icon,
      endIcon: EndIcon,
      errorMessage,
      label,
      letterCounter,
      isPasswordField = false,
      variant = 'outline',
      iconClickHandler,
      endIconClickHandler,
      bottomInfo,
      disabledEndIcon = false,
      ...rest
    } = props;

    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const toggleSecureTextEntry = () => setSecureTextEntry(value => !value);
    const isMaxLengthReached = rest.value?.length === letterCounter;
    return (
      <View style={containerStyle}>
        <View style={styles.textPosition}>
          {label ? (
            <Text style={[styles.label, rest.labelStyle]}>{label}</Text>
          ) : null}
          {letterCounter && (
            <Text
              style={[
                styles.label,
                {color: isMaxLengthReached ? COLORS.MAIN : COLORS.BLACK},
              ]}>
              {rest.value?.length}/{letterCounter}
            </Text>
          )}
        </View>

        <View style={styles.container}>
          <TextInput
            ref={ref}
            maxLength={letterCounter ?? undefined}
            secureTextEntry={isPasswordField ? secureTextEntry : false}
            {...rest}
            placeholderTextColor={COLORS.UNDERLINE}
            placeholder={rest.placeholder ? rest.placeholder : ''}
            style={[
              styles.input,
              variant === 'solid' ? styles.inputSolid : {},
              inputStyle,
              errorMessage ? styles.inputError : {},
              isMaxLengthReached ? styles.inputError : {},
              Icon ? styles.inputLefPadding : {},
              isPasswordField ? styles.inputRightPadding : {},
              rest.style,
              {paddingRight: EndIcon ? 40 : 0},
            ]}
          />
          {bottomInfo && (
            <Text fontWeight={300} style={styles.bottomInfo}>
              {bottomInfo}
            </Text>
          )}
          {Icon ? (
            <Pressable
              onPress={iconClickHandler && iconClickHandler}
              style={styles.icon}>
              <Icon />
            </Pressable>
          ) : null}
          {isPasswordField ? (
            <TouchableOpacity
              hitSlop={16}
              onPress={toggleSecureTextEntry}
              activeOpacity={0.8}
              style={styles.eye}>
              {secureTextEntry ? <OpenedEyeIcon /> : <ClosedEyeIcon />}
            </TouchableOpacity>
          ) : null}
          {EndIcon ? (
            <Pressable
              onPress={endIconClickHandler && endIconClickHandler}
              style={styles.eye}
              disabled={disabledEndIcon}>
              <EndIcon />
            </Pressable>
          ) : null}
        </View>
        <ValidationWarning errorMessage={errorMessage} />
        {/* TODO: fix it later when Gianni create list with error and add "zod" for validation*/}
      </View>
    );
  },
);
