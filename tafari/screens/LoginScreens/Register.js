import { View, Text, KeyboardAvoidingView,Keyboard, StatusBar, Platform, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FontFamily, FontSize, Padding, Border } from '../../GlobalStyles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { useAuth } from '../../app/context/AuthContext';

const Register = () => {
  const navigation = useNavigation();
  const { onRegister } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showRe_password, setShowRe_password] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState('');
  const toggleRe_PasswordVisibility = () => {
    setShowRe_password((prevShowPassword) => !prevShowPassword);
  };


  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleRegister = async (values) => {
    Keyboard.dismiss();
    try {
      const result = await onRegister(
        values.fullname,
        values.email,
        values.password,
        values.re_password
      );
      if (result && result.status === 201) {
        setShowSuccess(true);
      } else {
        setError('Something went wrong');
        setShowError(true);
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.detail);
      } else {
        setError('Something went wrong');
      }
      setShowError(true); 
    }
  };

  const handleLogin = () => {
    navigation.push('Login');
  }


  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      )
      .required('Password is required'),
    re_password: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });


  useEffect(() => {
    if (showSuccess) {
      // After 3 seconds, hide the success message
      const timer = setTimeout(() => {
        setShowSuccess(false);

      }, 3000);

      return () => {
        clearTimeout(timer)
        navigation.push('Login');
      };
    }
  }, [showSuccess]);


  return (
    <ScrollView className="flex flex-1 bg-[#f3eff4]">
      <StatusBar hidden />
      <View className="mx-3 items-center justify-center mt-24">
        <Text style={styles.Heading} className="font-semibold text-center text-4xl">
          Create {"\n"} Your Account
        </Text>
        <Text style={styles.textFlexBox} className="text-base text-2xl text-center mt-5">
          Join Tafari {"\n"} to Begin Your Journey
        </Text>
      </View>
      <View className="mt-10 mx-8">
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className="space-y-6"
        >
          <Formik
            initialValues={{ fullname: '', email: '', password: '', re_password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => handleRegister(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
              <>
                <TextInput
                  style={styles.input}

                  placeholder="Full Name"
                  onChangeText={handleChange('fullname')}
                  onBlur={handleBlur('fullname')}
                  value={values.fullname}
                  className="mb-3"
                />
                {touched.fullname && errors.fullname && (
                  <Text style={styles.errorText}>{errors.fullname}</Text>
                )}
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
                <View style={styles.passwordInput}>
                  <TextInput
                    style={styles.passwordTextInput}
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  <TouchableOpacity onPress={togglePasswordVisibility} style={styles.passwordIcon}>
                    <Ionicons
                      name={showPassword ? 'eye-off' : 'eye'}
                      size={24}
                      color={showPassword ? '#888' : '#000'}
                    />
                  </TouchableOpacity>
                </View>
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
                <View style={styles.passwordInput}>
                  <TextInput
                    style={styles.passwordTextInput}
                    placeholder="Confirm Password"
                    secureTextEntry={!showRe_password}
                    onChangeText={handleChange('re_password')}
                    onBlur={handleBlur('re_password')}
                    value={values.re_password}
                  />
                  <TouchableOpacity onPress={toggleRe_PasswordVisibility} style={styles.passwordIcon}>
                    <Ionicons
                      name={showRe_password ? 'eye-off' : 'eye'}
                      size={24}
                      color={showRe_password ? '#888' : '#000'}
                    />
                  </TouchableOpacity>
                </View>
                {touched.re_password && errors.re_password && (
                  <Text style={styles.errorText}>{errors.re_password}</Text>
                )}

                <TouchableOpacity style={styles.registerButton} onPress={handleSubmit}>
                  <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
          {showSuccess && (
            <View style={styles.successMessage}>
              <Ionicons name="checkmark-circle" size={30} color="#4CAF50" />
              <Text style={styles.successText}>Account created successfully!</Text>
            </View>
          )}
          {showError && (
            <View className="flex flex-row justify-center items-center">
              <Ionicons name="close-circle" size={30} color="#FF5733" />
              <Text style={styles.errorText}>
                {error}
                </Text>
            </View>
          )}

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={handleLogin}
            >
              <Text style={styles.loginLink}>Log In</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingVertical: 20,
    width: '100%',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 9,
    fontFamily: FontFamily.epilogueMedium
  },
  Heading: {
    fontFamily: FontFamily.epilogueBold
  },
  textFlexBox: {
    fontFamily: FontFamily.epilogueRegular
  },
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 9,
    paddingHorizontal: 15,
    paddingVertical: 12
  },
  passwordTextInput: {
    flex: 1,
    fontFamily: FontFamily.epilogueMedium,
  },
  passwordIcon: {
    padding: 5,
  },
  registerButton: {
    backgroundColor: '#FE8235',
    borderRadius: 9,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: FontSize.medium,
    fontFamily: FontFamily.epilogueBold,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  loginText: {
    color: '#888',
    fontFamily: FontFamily.epilogueRegular,
  },
  loginLink: {
    color: '#FE8235',
    fontFamily: FontFamily.epilogueMedium,
    marginLeft: 5,
  },
  successMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  successText: {
    color: '#4CAF50',
    fontSize: FontSize.medium,
    fontFamily: FontFamily.epilogueMedium,
    marginLeft: 10,
  },
  errorText: {
    color: 'red',
    fontSize: FontSize.small,
    fontFamily: FontFamily.epilogueRegular,
    marginTop: 10,
  },
});

export default Register;
