import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const HomeButton = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.homeButton, style]}
      onPress={() => navigation.navigate("Home")}
    >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/home-icon.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  homeButton: {
    width: 52,
    height: 52,
  },
});

export default HomeButton;
