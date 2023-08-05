import * as React from "react";
import { Text, StyleSheet, StatusBar, View } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const Splash = () => {
  return (
    <View className="flex-1 bg-[#FE8235]">
      <StatusBar  hidden  />
      <View className='flex flex-1 justify-center items-center bg-[#FE8235]'>
        <Text style={styles.splashText}>tafakari</Text>
      </View>
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

});

export default Splash;
