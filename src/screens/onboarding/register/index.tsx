import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '../../../components/text';
import {Logo} from '../../../assets/icons/logo/Logo';
import {ControlledInput} from '../../../components/input';
import {useForm} from 'react-hook-form';
import {windowWidth} from '../../../utils/general';
import {Box} from '../../../components/box';
import {Spacer} from '../../../components/spacer';
import {Button} from '../../../components/button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaViewContainer} from '../../../components/safe-area-view-container';
import {usePostEmailSignUp} from '../../../hooks/api/usePostEmailSignUp';

interface FormData {
  email: string;
  password: string;
  password2: string;
  first_name: string;
  last_name: string;
}

export const Register = () => {
  const {errors, emailSignUp} = usePostEmailSignUp();
  const {control, handleSubmit} = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      password2: '',
      first_name: '',
      last_name: '',
    },
  });

  const onSubmit = async ({
    email,
    password,
    password2,
    first_name,
    last_name,
  }: FormData) => {
    await emailSignUp({email, password, password2, first_name, last_name});
  };

  return (
    <SafeAreaViewContainer>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Logo />
          <Spacer height={24} />
          <Box>
            <Text fontWeight={500} style={styles.subTitle}>
              Register via e-mail
            </Text>
            <ControlledInput
              control={control}
              name="first_name"
              placeholder={'Enter your first name'}
              label={'First name'}
              variant="solid"
              containerStyle={styles.input}
              errorMessage={errors?.first_name?.[0]}
            />
            <ControlledInput
              control={control}
              name="last_name"
              placeholder={'Enter your last name'}
              label={'Last name'}
              variant="solid"
              containerStyle={styles.input}
              errorMessage={errors?.last_name?.[0]}
            />
            <ControlledInput
              control={control}
              autoCapitalize="none"
              name="email"
              placeholder={'Enter your email'}
              label={'Email'}
              variant="solid"
              containerStyle={styles.input}
              errorMessage={errors?.email?.[0]}
              keyboardType="email-address"
            />
            <ControlledInput
              control={control}
              name="password"
              placeholder={'Enter your password'}
              label={'Password'}
              variant="solid"
              containerStyle={styles.input}
              isPasswordField
              errorMessage={errors?.password?.[0]}
              textContentType="newPassword"
            />
            <ControlledInput
              control={control}
              name="password2"
              placeholder={'Repeat your password'}
              label={'Repeat password'}
              variant="solid"
              containerStyle={styles.input}
              isPasswordField
              errorMessage={errors?.password2?.[0]}
              textContentType="newPassword"
            />
            <Button title="Register" onPress={handleSubmit(onSubmit)} />
          </Box>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: 24,
  },
  subTitle: {
    width: windowWidth,
    letterSpacing: -0.31,
    paddingBottom: 24,
  },
});
