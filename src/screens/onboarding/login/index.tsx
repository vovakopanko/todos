import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Text} from '../../../components/text';
import {COLORS} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../navigation/constants';
import {Button} from '../../../components/button';
import {useForm} from 'react-hook-form';
import {ControlledInput} from '../../../components/input';
import {Box} from '../../../components/box';
import {Spacer} from '../../../components/spacer';
import {Logo} from '../../../assets/icons/logo/Logo';
import {SafeAreaViewContainer} from '../../../components/safe-area-view-container';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ValidationWarning} from '../../../components/validation-warning';
import {usePostEmailSignIn} from '../../../hooks/api/usePostEmailSignIn';

interface FormData {
  email: string;
  password: string;
}

export const Login = () => {
  const {navigate} = useNavigation<any>();
  const {error, emailSignIn, setError} = usePostEmailSignIn();

  const {control, handleSubmit, reset} = useForm<FormData>({
    defaultValues: {email: '', password: ''},
  });

  const onSubmit = async ({email, password}: FormData) => {
    await emailSignIn({email, password});
  };

  const goToRegistrationScreen = () => {
    navigate(ROUTES.REGISTER);
    reset();
    setError('');
  };

  return (
    <SafeAreaViewContainer>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Logo />
            <Text fontWeight={700} style={styles.logoTitle}>
              TIKO TO DO LIST
            </Text>
          </View>
          <Box>
            <ControlledInput
              autoCapitalize="none"
              control={control}
              name="email"
              placeholder={'Enter your email'}
              label={'Email'}
              variant="solid"
              containerStyle={styles.input}
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
            />
            <Button title="Login" onPress={handleSubmit(onSubmit)} />
            <ValidationWarning errorMessage={error} />
          </Box>

          <Spacer height={20} />
          <View style={styles.signUpBlock}>
            <Text fontWeight={400} style={styles.text1}>
              Don't have an account?
            </Text>
            <Pressable onPress={goToRegistrationScreen}>
              <Text fontWeight={500} style={styles.signUpBtn}>
                Sign up
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaViewContainer>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: 80,
  },
  logoTitle: {
    fontSize: 27,
    lineHeight: 38,
    color: COLORS.MAIN,
  },
  container: {
    paddingTop: 80,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: 24,
  },
  signUpBlock: {
    flexDirection: 'row',
    gap: 10,
  },
  signUpBtn: {
    fontSize: 16,
    color: COLORS.MAIN,
  },
  text1: {
    fontSize: 14,
    color: COLORS.BLACK,
  },
});
