import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const LibraryButton = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.parent, style]}
      onPress={() => navigation.navigate("Library")}
    >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/library.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  parent: {
    width: 52,
    height: 52,
  },
});

export default LibraryButton;
