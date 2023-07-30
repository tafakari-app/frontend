import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily } from "../GlobalStyles";

const Splash = () => {
  return (
    <View style={styles.splash}>
      <Text style={styles.splashText}>tafakari</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  splashText: {
    position: "absolute",
    top: 388,
    left: 68,
    fontSize: 40,
    fontWeight: "800",
    fontFamily: FontFamily.epilogueExtraBold,
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 240,
    height: 46,
  },
  splash: {
    backgroundColor: "#fe8235",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Splash;
