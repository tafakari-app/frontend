import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const CardContainer = ({ textContent }) => {
  return (
    <View style={[styles.rectangleParent, styles.rectangleLayout]}>
      <View style={[styles.rectangle, styles.watchPosition]} />
      <Image
        style={[styles.maskGroupIcon, styles.watchPosition]}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <View style={styles.peerGroupMeetup}>
        <Text style={styles.lorem}>{textContent}</Text>
        <Text style={[styles.description, styles.authorTypo]}>Description</Text>
        <Text style={[styles.author, styles.authorTypo]}>Author</Text>
        <View style={[styles.watchNow, styles.watchLayout]}>
          <View style={[styles.watchNowChild, styles.watchLayout]} />
          <Text style={[styles.watch, styles.watchPosition]}>Watch</Text>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/media-play-icon.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 151,
    width: 325,
  },
  watchPosition: {
    left: 0,
    position: "absolute",
  },
  authorTypo: {
    opacity: 0.9,
    lineHeight: 18,
    fontSize: FontSize.size_xs,
    marginTop: 6,
    textAlign: "left",
    color: Color.dimgray_200,
  },
  watchLayout: {
    height: 39,
    width: 138,
  },
  rectangle: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.linen,
    top: 0,
    left: 0,
    height: 151,
    width: 325,
  },
  maskGroupIcon: {
    top: 0,
    left: 0,
    height: 151,
    width: 325,
  },
  lorem: {
    fontSize: FontSize.size_3xl,
    fontWeight: "800",
    fontFamily: FontFamily.epilogueExtraBold,
    textAlign: "left",
    color: Color.dimgray_200,
  },
  description: {
    fontFamily: FontFamily.rubikRegular,
    marginTop: 6,
    width: 212,
  },
  author: {
    fontWeight: "500",
    fontFamily: FontFamily.rubikMedium,
    width: 199,
    marginTop: 6,
  },
  watchNowChild: {
    borderRadius: Border.br_3xs,
    left: 0,
    position: "absolute",
    top: 0,
  },
  watch: {
    top: 4,
    fontSize: FontSize.size_base,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.epilogueBold,
    color: Color.chocolate,
    textAlign: "left",
  },
  groupIcon: {
    height: "35.9%",
    width: "10.14%",
    top: "27.9%",
    right: "31.88%",
    bottom: "36.2%",
    left: "57.97%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  watchNow: {
    marginTop: 6,
  },
  peerGroupMeetup: {
    top: 25,
    left: 20,
    width: 212,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 26,
  },
});

export default CardContainer;
