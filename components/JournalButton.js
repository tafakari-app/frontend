import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Image } from "expo-image";

const JournalButton = ({ style }) => {
  return (
    <View style={[styles.settingsLayout, style]}>
      <View style={[styles.rectangle4, styles.rectangle4Position]} />
      <Image
        style={[styles.ionjournalIcon, styles.rectangle4Position]}
        contentFit="cover"
        source={require("../assets/journal.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangle4Position: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rectangle4: {
    marginTop: -26,
    marginLeft: -26,
    height: 52,
    width: 52,
  },
  ionjournalIcon: {
    marginTop: -12,
    marginLeft: -15,
    width: 28,
    height: 28,
    overflow: "hidden",
  },
  settingsLayout: {
    height: 52,
    width: 52,
  },
});

export default JournalButton;
