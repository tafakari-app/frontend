import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const TrendingCard = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.rectangle} />
      <View style={styles.coalDingoParent}>
        <Text style={styles.coalDingo}>Coal Dingo</Text>
        <Text style={[styles.justNow, styles.textTypo]}>just now</Text>
        <Text
          style={styles.isThereA}
        >{`Is there a therapy which can cure crossdressing & bdsm compulsion?`}</Text>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/ellipse-21.png")}
        />
      </View>
      <Image
        style={styles.groupItem}
        contentFit="cover"
        source={require("../assets/comment-icon.png")}
      />
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textTypo]}>2</Text>
        <Image
          style={[styles.antDesignlikeOutlinedIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/like-button-active.png")}
        />
      </View>
      <View style={styles.groupInner} />
      <Image
        style={[styles.bxshareIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/share-icon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    color: Color.dimgray_100,
    fontFamily: FontFamily.rubikRegular,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    overflow: "hidden",
    width: 20,
    height: 20,
    position: "absolute",
  },
  rectangle: {
    height: 108,
    left: 0,
    top: 0,
    position: "absolute",
    width: 325,
  },
  coalDingo: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.rubikMedium,
    textAlign: "left",
    color: Color.dimgray_200,
    left: 52,
    lineHeight: 18,
    top: 0,
    position: "absolute",
  },
  justNow: {
    left: 126,
    fontSize: FontSize.size_xs,
    opacity: 0.7,
    lineHeight: 18,
    color: Color.dimgray_100,
  },
  isThereA: {
    top: 22,
    fontSize: FontSize.size_smi,
    width: 267,
    fontFamily: FontFamily.rubikRegular,
    textAlign: "left",
    color: Color.dimgray_200,
    lineHeight: 18,
    left: 52,
    position: "absolute",
  },
  groupChild: {
    height: 35,
    width: 35,
    left: 0,
    top: 0,
    position: "absolute",
  },
  coalDingoParent: {
    left: 1,
    width: 319,
    height: 58,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    top: 76,
    left: 122,
    width: 18,
    height: 18,
    position: "absolute",
  },
  text: {
    left: 27,
    fontSize: 13,
    lineHeight: 20,
  },
  antDesignlikeOutlinedIcon: {
    left: 0,
    top: 0,
  },
  parent: {
    left: 53,
    height: 20,
    top: 74,
    width: 35,
    position: "absolute",
  },
  groupInner: {
    top: 110,
    borderStyle: "solid",
    borderColor: "rgba(217, 216, 216, 0.3)",
    borderTopWidth: 1,
    width: 326,
    height: 1,
    left: 0,
    position: "absolute",
  },
  bxshareIcon: {
    left: 305,
    top: 74,
    width: 20,
  },
  rectangleParent: {
    height: 110,
    width: 325,
  },
});

export default TrendingCard;
