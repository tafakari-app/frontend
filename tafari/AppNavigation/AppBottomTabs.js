import * as React from "react";
import Home from "../screens/Home";
import Journal from "../screens/Journal";
import Community from "../screens/Community";
import Library from "../screens/Library";

import HomeButtonActive from "../components/HomeButtonActive";
import HomeButton from "../components/HomeButton";
import LibraryButtonActive from "../components/LibraryButtonActive";
import LibraryButton from "../components/LibraryButton";
import JournalButtonActive from "../components/JournalButtonActive";
import JournalButton from "../components/JournalButton";
import CommunityButtonActive from "../components/CommunityButtonActive";
import CommunityButton from "../components/CommunityButton";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const AppBottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,
          height: 80,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <HomeButtonActive /> : <HomeButton />
          ),

          headerShown: false
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <LibraryButtonActive /> : <LibraryButton />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Journal"
        component={Journal}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <JournalButtonActive /> : <JournalButton />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <CommunityButtonActive /> : <CommunityButton />
          ),
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}

export default AppBottomTabs
