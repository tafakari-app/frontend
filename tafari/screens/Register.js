import { View, Text, KeyboardAvoidingView, StatusBar, Platform, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FontFamily, FontSize, Padding, Border } from '../GlobalStyles';
import { Ionicons } from '@expo/vector-icons';


const Register = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    re_password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showRe_password, setShowRe_password] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);


  const toggleRe_PasswordVisibility = () => {
    setShowRe_password((prevShowPassword) => !prevShowPassword);
  };


  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleRegister = () => {


    // if the register was successful
    setShowSuccess(true);
  };


  useEffect(() => {
    if (showSuccess) {
      // After 3 seconds, hide the success message
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showSuccess]);


  return (
    <View className="flex flex-1 bg-[#f3eff4]">
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
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={formData.fullname}
            onChangeText={(text) => setFormData({ ...formData, fullname: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
          />
          <View style={styles.passwordInput}>
            <TextInput
              style={styles.passwordTextInput}
              placeholder="Password"
              secureTextEntry={!showPassword}
              value={formData.password}
              onChangeText={(text) => setFormData({ ...formData, password: text })}
            />
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.passwordIcon}>
              <Ionicons
                name={showPassword ? 'eye-off' : 'eye'}
                size={24}
                color={showPassword ? '#888' : '#000'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.passwordInput}>
          <TextInput
              style={styles.passwordTextInput}
              placeholder="Password"
              secureTextEntry={!showPassword}
              value={formData.re_password}
              onChangeText={(text) => setFormData({ ...formData, re_password: text })}
            />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.passwordIcon}>
              <Ionicons
                name={showRe_password ? 'eye-off' : 'eye'}
                size={24}
                color={showRe_password ? '#888' : '#000'}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
          {showSuccess && (
            <View style={styles.successMessage}>
              <Ionicons name="checkmark-circle" size={30} color="#4CAF50" />
              <Text style={styles.successText}>Account created successfully!</Text>
            </View>
          )}

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity

            >
              <Text style={styles.loginLink}>Log In</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
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
    paddingVertical:12
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
});

export default Register;
