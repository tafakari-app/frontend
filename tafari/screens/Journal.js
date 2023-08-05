import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Journal = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.journal}>
      <View style={styles.shadow} />
      <Image
        style={[styles.naviationRectangleIcon, styles.soonPosition]}
        contentFit="cover"
        source={require("../assets/naviation-rectangle.png")}
      />
      <View style={[styles.headerParent, styles.headerParentFlexBox]}>
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
            <Text style={[styles.text, styles.textFlexBox]}>3</Text>
          </View>
          <Image
            style={styles.headerChild}
            contentFit="cover"
            source={require("../assets/ellipse-2.png")}
          />
        </View>
        <View style={styles.rectangleParent}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <View style={[styles.maskGroup, styles.rectanglePosition]} />
          <View style={[styles.peerGroupMeetup, styles.headerParentFlexBox]}>
            <Text style={styles.coming}>Coming</Text>
            <View style={styles.watchNow}>
              <View style={styles.watchNowChild} />
              <Text style={[styles.soon, styles.textFlexBox]}>Soon</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  soonPosition: {
    left: "50%",
    top: "50%",
  },
  headerParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  groupChildPosition: {
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  rectanglePosition: {
    left: 0,
    top: 0,
    width: 325,
    position: "absolute",
  },
  shadow: {
    top: 474,
    left: 38,
    borderRadius: Border.br_146xl,
    backgroundColor: Color.iris100,
    width: 298,
    height: 23,
    display: "none",
    position: "absolute",
  },
  naviationRectangleIcon: {
    marginTop: 321,
    marginLeft: -187.5,
    height: 85,
    width: 375,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
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
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
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
  rectangle: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.linen,
    height: 609,
  },
  maskGroup: {
    height: 413,
  },
  coming: {
    fontSize: FontSize.size_3xl,
    fontWeight: "800",
    fontFamily: FontFamily.epilogueExtraBold,
    color: Color.dimgray_200,
    textAlign: "left",
  },
  watchNowChild: {
    left: 1,
    borderRadius: Border.br_3xs,
    width: 138,
    height: 39,
    top: 0,
    position: "absolute",
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
  peerGroupMeetup: {
    top: 249,
    left: 35,
    width: 255,
  },
  rectangleParent: {
    marginTop: 20,
    height: 609,
    width: 325,
  },
  headerParent: {
    top: 44,
    left: 19,
  },
  journal: {
    backgroundColor: Color.gray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Journal;
