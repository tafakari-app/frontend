import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const WellnessHubSection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerParent}>
      <View style={styles.header}>
        <Pressable
          style={styles.group}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Community" })
          }
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/group.png")}
          />
        </Pressable>
        <View style={[styles.ellipseParent, styles.groupChildPosition]}>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-5.png")}
          />
          <Text style={styles.text}>3</Text>
        </View>
        <Image
          style={styles.headerChild}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
      </View>
      <Text style={styles.welcomeBackSarina}>Wellness Hub</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
    height: "100%",
  },
  group: {
    left: "90%",
    top: "18.38%",
    right: "3.61%",
    bottom: "10.27%",
    width: "6.39%",
    height: "71.35%",
    position: "absolute",
  },
  groupChild: {
    bottom: "0%",
    left: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
    height: "100%",
  },
  text: {
    height: "57.14%",
    width: "38.1%",
    top: "28.57%",
    left: "33.33%",
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.epilogueMedium,
    color: Color.gray_100,
    textAlign: "center",
    position: "absolute",
  },
  ellipseParent: {
    height: "56.76%",
    width: "6.21%",
    bottom: "43.24%",
    left: "93.79%",
  },
  headerChild: {
    top: -2,
    left: -4,
    width: 43,
    height: 43,
    position: "absolute",
  },
  header: {
    width: 338,
    height: 37,
  },
  welcomeBackSarina: {
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.epilogueSemiBold,
    color: Color.gray_300,
    textAlign: "left",
    marginTop: 18,
  },
  headerParent: {
    top: 46,
    left: 19,
    position: "absolute",
  },
});

export default WellnessHubSection;
