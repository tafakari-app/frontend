import { StyleSheet, Text, View } from "react-native";
import AppNavigation from "../AppNavigation/AppNavigation";
import { AuthProvider, useAuth } from "./context/AuthContext";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppAuthScreens from "../AppNavigation/AppAuth";
export default function Page() {
  return (
    <AuthProvider>
      <Layout></Layout>
    </AuthProvider>
  );
}

export const Layout = () => {
  const {AuthState} = useAuth();


  return (
    <NavigationContainer independent={true}>
      {
        AuthState.authenticated ? (
          <AppNavigation />
        ) : (
          <AppAuthScreens />
        )
      }
    </NavigationContainer>
  );
}
