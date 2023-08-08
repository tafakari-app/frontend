import { View, Text, KeyboardAvoidingView, StatusBar, Platform, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FontFamily, FontSize, Padding, Border } from '../../GlobalStyles'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../app/context/AuthContext';
import { Formik } from 'formik';
import * as Yup from 'yup';


const Login = () => {
    const navigation = useNavigation();
    const { onLogin } = useAuth();
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .max(20, 'Password must not exceed 20 characters')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
            )
            .required('Password is required'),
    });

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleLogin = async (values) => {
        const result = await onLogin(values.email, values.password);
        if (result && result.error) {
            setError('Something went wrong with your login');
        }
    };


    const handleSignup = () => {
        navigation.push('Register');
    }

    return (
        <View className="flex flex-1 bg-[#f3eff4]">
            <StatusBar hidden />
            <View className="mx-3 items-center justify-center mt-24">
                <Text style={styles.Heading} className="font-semibold text-center text-4xl">
                    Hello Again!
                </Text>
                <Text style={styles.textFlexBox} className="text-base text-2xl text-center mt-5">
                    Welcome Back {"\n"}  to Tafari
                </Text>
            </View>
            <View className="mt-10 mx-8">
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    className="space-y-3"
                >
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleLogin}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
                            <>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter Email"
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
                                        placeholder="Enter Password"
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
                                {showError && (
                                    <View className="flex flex-row justify-center items-center">
                                        <Ionicons name="close-circle" size={30} color="#FF5733" />
                                        <Text style={styles.errorText}>
                                            {error}
                                        </Text>
                                    </View>
                                )}
                                <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
                                    <Text style={styles.loginButtonText}>Login</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </Formik>

                    <View style={styles.forgotPasswordContainer}>
                        <TouchableOpacity>
                            <Text
                                style={styles.forgotPasswordText}
                            >
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        onPress={handleSignup}
                        style={styles.signUpButton}
                    >
                        <Text style={styles.signUpButtonText}>Sign Up</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingVertical: 20,
        width: "100%",
        paddingHorizontal: 15,
        backgroundColor: "#fff",
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
        paddingVertical: 20,
    },
    passwordTextInput: {
        flex: 1,
        fontFamily: FontFamily.epilogueMedium,
    },
    passwordIcon: {
        padding: 5,
    },
    loginButton: {
        backgroundColor: '#FE8235',
        borderRadius: 9,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButtonText: {
        color: '#fff',
        fontSize: FontSize.medium,
        fontFamily: FontFamily.epilogueBold,
    },
    forgotPasswordContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    forgotPasswordText: {
        color: '#FE8235',
        fontSize: FontSize.small,
        fontFamily: FontFamily.epilogueRegular,
    },
    signUpButton: {
        backgroundColor: '#fff',
        borderRadius: 9,
        borderWidth: 1,
        borderColor: '#FE8235',
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    signUpButtonText: {
        color: '#FE8235',
        fontSize: FontSize.medium,
        fontFamily: FontFamily.epilogueBold,
    },
    errorText: {
        color: 'red',
        fontFamily: FontFamily.epilogueRegular,
        fontSize: FontSize.small,
        marginTop: 5,
    },
});

export default Login;
