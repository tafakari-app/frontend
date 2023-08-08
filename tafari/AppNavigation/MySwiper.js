import React from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import Home from '../screens/AppScreens/Home';
import Journal from '../screens/AppScreens/Journal';
import Community from '../screens/AppScreens/Community';
import Library from '../screens/AppScreens/Library';

const MySwiper = () => {
    return (
        <Swiper
            style={{ flex: 1 }}
            showsButtons={true}
        >
            <Home />
            <Journal />
            <Community />
            <Library />
        </Swiper>
    );
}

export default MySwiper;
