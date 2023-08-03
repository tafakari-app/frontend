import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const SelfConquerorContainer = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.groupContainer}>
        <View style={[styles.groupWrapper, styles.rectangleGroupLayout]}>
          <View style={[styles.groupWrapper, styles.rectangleGroupLayout]}>
            <View style={[styles.rectangle, styles.rectanglePosition]} />
            <Text style={[styles.journal, styles.journalTypo]}>Journal</Text>
            <Image
              style={[styles.ionjournalIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/ionjournal.png")}
            />
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleGroupLayout]}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Image
            style={[styles.solarlibraryBoldDuotoneIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/solarlibraryboldduotone.png")}
          />
          <Text style={[styles.library, styles.journalTypo]}>Library</Text>
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.maskGroupLayout]}>
        <View style={[styles.rectangle2, styles.rectanglePosition]} />
        <View style={[styles.maskGroup, styles.maskGroupLayout]} />
        <Image
          style={[styles.faquoteLeftIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/faquoteleft.png")}
        />
        <Text style={[styles.itIsBetter, styles.journalTypo]}>
          “It is better to conquer yourself than to win a thousand battles”
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleGroupLayout: {
    width: 155,
    height: 62,
  },
  rectanglePosition: {
    borderRadius: Border.br_base,
    left: 0,
    top: 0,
    position: "absolute",
  },
  journalTypo: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  maskGroupLayout: {
    height: 79,
    width: 324,
    position: "absolute",
  },
  rectangle: {
    backgroundColor: Color.whitesmoke_200,
    width: 155,
    height: 62,
  },
  journal: {
    left: 52,
    width: 58,
    color: Color.dimgray_200,
    fontFamily: FontFamily.epilogueBold,
    fontWeight: "700",
    lineHeight: 32,
    top: 15,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  ionjournalIcon: {
    left: 13,
    height: 28,
    width: 28,
    top: 17,
    overflow: "hidden",
  },
  groupWrapper: {
    left: 0,
    top: 0,
    position: "absolute",
    width: 155,
  },
  solarlibraryBoldDuotoneIcon: {
    left: 16,
    height: 28,
    width: 28,
    top: 17,
    overflow: "hidden",
  },
  library: {
    left: 57,
    color: Color.dimgray_200,
    fontFamily: FontFamily.epilogueBold,
    fontWeight: "700",
    lineHeight: 32,
    top: 15,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  rectangleGroup: {
    left: 170,
    top: 0,
    width: 155,
    position: "absolute",
  },
  groupContainer: {
    height: 62,
    left: 0,
    top: 0,
    position: "absolute",
    width: 325,
  },
  rectangle2: {
    backgroundColor: Color.whitesmoke_100,
    borderStyle: "solid",
    borderColor: "#f4f4f4",
    borderWidth: 1,
    height: 80,
    width: 325,
  },
  maskGroup: {
    left: 0,
    top: 0,
  },
  faquoteLeftIcon: {
    top: 30,
    left: 288,
    width: 24,
    height: 20,
  },
  itIsBetter: {
    top: 21,
    left: 15,
    letterSpacing: -0.1,
    lineHeight: 20,
    fontFamily: FontFamily.epilogueRegular,
    color: Color.dimgray_100,
    width: 258,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  rectangleContainer: {
    top: 78,
    left: 1,
  },
  groupParent: {
    height: 157,
    marginTop: 26,
    width: 325,
  },
});

export default SelfConquerorContainer;
