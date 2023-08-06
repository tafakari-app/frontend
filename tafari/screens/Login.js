import { View, Text, KeyboardAvoidingView, StatusBar, Platform, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FontFamily, FontSize, Padding, Border } from '../GlobalStyles'
import { Ionicons } from '@expo/vector-icons';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleLogin = () => {

    };

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
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Email"
                        value={formData.email}
                        onChangeText={text => setFormData({ ...formData, email: text })}
                    />
                    <View style={styles.passwordInput}>
                        <TextInput
                            style={styles.passwordTextInput}
                            placeholder="Enter Password"
                            secureTextEntry={!showPassword}
                            value={formData.password}
                            onChangeText={text => setFormData({ ...formData, password: text })}
                        />
                        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.passwordIcon}>
                            <Ionicons
                                name={showPassword ? 'eye-off' : 'eye'}
                                size={24}
                                color={showPassword ? '#888' : '#000'}
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={handleLogin}

                    >
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>

                    <View style={styles.forgotPasswordContainer}>
                        <TouchableOpacity>
                            <Text
                                style={styles.forgotPasswordText}
                            >
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.signUpButton}>
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
});

export default Login;
