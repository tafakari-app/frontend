import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const CommunityButton = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.communityButton, style]}
      onPress={() => navigation.navigate("Community")}
    >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/community.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  communityButton: {
    width: 52,
    height: 52,
  },
});

export default CommunityButton;
