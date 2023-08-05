import * as React from "react";
import { StyleSheet, View, Text, StatusBar, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import SectionGreetings from "../components/SectionGreetings";


const Journal = () => {
  const navigation = useNavigation();
  return (

    <View className="flex flex-1 bg-[#fbfbfb] -mt-10 ">
      <StatusBar barStyle="dark-content" />

      <SectionGreetings />

      <View className="mt-3 flex flex-1 justify-center mx-4 bg-[#fef3e7] rounded-lg items-center mb-16">
        <View className="items-center">
          <Text style={styles.coming}>Coming</Text>
          <View style={styles.watchNow}>
            <Text style={[styles.soon, styles.textFlexBox]}>Soon</Text>
          </View>
        </View>
      </View>

    </View>

  );
};





const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "center",
    position: "absolute",
  },

  coming: {
    fontSize: FontSize.size_3xl,
    fontWeight: "800",
    fontFamily: FontFamily.epilogueExtraBold,
    color: Color.dimgray_200,
    textAlign: "left",
  },

  soon: {
    marginTop: -15.5,
    marginLeft: -73,
    fontSize: FontSize.size_base,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.epilogueBold,
    color: Color.chocolate,
    width: 146,
    left: "50%",
    top: "50%",
  },
  watchNow: {
    marginTop: 6,
    height: 39,
    width: 146,
  },
});

export default Journal;
