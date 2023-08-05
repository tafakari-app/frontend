import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const SectionCard = () => {
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
          <Text style={[styles.text, styles.textTypo]}>3</Text>
        </View>
        <Image
          style={styles.headerChild}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
      </View>
      <Text style={styles.welcomeBackSarinaContainer}>
        <Text style={styles.textTypo}>Hi</Text>
        <Text style={styles.text1}>{`, `}</Text>
        <Text style={styles.sarina}>Sarina!</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.epilogueMedium,
    fontWeight: "500",
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
  text1: {
    fontWeight: "600",
    fontFamily: FontFamily.epilogueSemiBold,
  },
  sarina: {
    fontWeight: "700",
    fontFamily: FontFamily.epilogueBold,
  },
  welcomeBackSarinaContainer: {
    fontSize: FontSize.size_7xl,
    lineHeight: 32,
    color: Color.gray_300,
    textAlign: "left",
    width: 235,
    marginTop: 18,
  },
  headerParent: {
    top: 46,
    left: 19,
    position: "absolute",
  },
});

export default SectionCard;
