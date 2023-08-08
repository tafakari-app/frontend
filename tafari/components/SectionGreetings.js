import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import tw from 'twrnc';
import { FontFamily, FontSize, Color } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useAuth } from '../app/context/AuthContext';

const SectionGreetings = () => {
    const { onLogout } = useAuth();

    const navigation = useNavigation();
    const [notificationCount, setNotificationCount] = useState(1);
    const handlePress = () => {
        setNotificationCount(0);
        onLogout();
    };
    return (
        <View className="mt-14 shadow-md ">
            <View className="flex flex-row justify-between mx-4 items-center">
                <Image
                    className="w-16 h-16 rounded-full"
                    contentFit="cover"
                    source={require("../assets/ellipse-2.png")}
                />
                <TouchableOpacity
                    onPress={handlePress}
                >
                    <Feather name="log-out" size={40} color="black" />
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    notify: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'red',
        borderRadius: 10,
        minWidth: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notifyText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    }

})


export default SectionGreetings
