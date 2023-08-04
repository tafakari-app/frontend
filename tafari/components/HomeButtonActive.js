import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const HomeButtonActive = ({ style }) => {
  return (
    <Image
      style={[styles.homeButtonActive, style]}
      contentFit="cover"
      source={require("../assets/home-icon-active.png")}
    />
  );
};

const styles = StyleSheet.create({
  homeButtonActive: {
    width: 52,
    height: 52,
  },
});

export default HomeButtonActive;
