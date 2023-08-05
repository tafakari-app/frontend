import * as React from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ContainerCardForm = ({ timestamp, imageTimestamp }) => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.rectangle} />
      <View style={styles.pigeonCarParent}>
        <Text style={styles.pigeonCar}>Pigeon Car</Text>
        <Text style={styles.hrsAgo}>{timestamp}</Text>
        <Text
          style={styles.isThereA}
        >{`Is there a therapy which can cure crossdressing & bdsm compulsion?`}</Text>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={imageTimestamp}
        />
      </View>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.wrapper, styles.parentLayout]}>
          <Text style={[styles.text, styles.textTypo]}>2</Text>
        </View>
        <Image
          style={styles.akarIconscomment}
          contentFit="cover"
          source={require("../assets/comment-icon.png")}
        />
      </View>
      <View style={[styles.parent, styles.parentLayout]}>
        <Text style={[styles.text1, styles.textTypo]}>12</Text>
        <Image
          style={[styles.antDesignlikeOutlinedIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/like-button.png")}
        />
      </View>
      <View style={styles.groupItem} />
      <Image
        style={[styles.bxshareIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/share-icon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: 20,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 20,
    fontSize: 13,
    color: Color.dimgray_100,
    fontFamily: FontFamily.rubikRegular,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 20,
    overflow: "hidden",
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
  pigeonCar: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.rubikMedium,
    textAlign: "left",
    color: Color.dimgray_200,
    lineHeight: 18,
    left: 52,
    top: 0,
    position: "absolute",
  },
  hrsAgo: {
    left: 126,
    fontSize: FontSize.size_xs,
    opacity: 0.7,
    color: Color.dimgray_100,
    fontFamily: FontFamily.rubikRegular,
    textAlign: "left",
    lineHeight: 18,
    top: 0,
    position: "absolute",
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
    width: 35,
    height: 35,
    left: 0,
    top: 0,
    position: "absolute",
  },
  pigeonCarParent: {
    left: 1,
    width: 319,
    height: 58,
    top: 0,
    position: "absolute",
  },
  text: {
    left: 0,
  },
  wrapper: {
    left: 26,
    width: 8,
    top: 0,
  },
  akarIconscomment: {
    top: 2,
    width: 18,
    height: 18,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  groupParent: {
    left: 122,
    width: 34,
    top: 74,
  },
  text1: {
    left: 27,
  },
  antDesignlikeOutlinedIcon: {
    left: 0,
    top: 0,
  },
  parent: {
    left: 53,
    width: 41,
    top: 74,
  },
  groupItem: {
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
  },
  rectangleParent: {
    height: 110,
    marginTop: 16,
    width: 325,
  },
});

export default ContainerCardForm;
