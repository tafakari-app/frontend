import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const Splash = () => {
  return (
    <View style={styles.splash}>
      <Text style={styles.splashText}>tafakari</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  splashText: {
    fontSize: 40,
    fontWeight: "800",
    fontFamily: FontFamily.epilogueExtraBold,
    color: Color.white,
    textAlign: "center",
  },
  splash: {
    backgroundColor: Color.chocolate,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    paddingHorizontal: 67,
    paddingVertical: 378,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Splash;
