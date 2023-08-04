import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const CommunityButtonActive = ({ style }) => {
  return (
    <Image
      style={[styles.communityButtonActive, style]}
      contentFit="cover"
      source={require("../assets/community-active.png")}
    />
  );
};

const styles = StyleSheet.create({
  communityButtonActive: {
    width: 52,
    height: 52,
  },
});

export default CommunityButtonActive;
