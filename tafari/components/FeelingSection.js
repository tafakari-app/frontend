import * as React from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const FeelingSection = () => {
  return (
    <View style={styles.howAreYouFeelingTodayParent}>
      <Text style={styles.howAreYou}>How are you feeling today ?</Text>
      <ScrollView
        style={styles.calmParent}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.calm}>
          <View style={[styles.rect, styles.rectChildLayout]} />
          <Text style={[styles.calm1, styles.calm1Typo]}>Calm</Text>
          <Image
            style={[styles.calmIcon, styles.calmIconLayout]}
            contentFit="cover"
            source={require("../assets/calm--icon.png")}
          />
          <View style={[styles.calm2, styles.focusLayout]}>
            <View style={[styles.rect, styles.rectChildLayout]} />
            <Text style={[styles.calm1, styles.calm1Typo]}>Calm</Text>
            <Image
              style={[styles.calmIcon1, styles.calmIconLayout]}
              contentFit="cover"
              source={require("../assets/calm--icon.png")}
            />
          </View>
        </View>
        <View style={[styles.calm2, styles.focusLayout]}>
          <View style={[styles.rect2, styles.rectChildLayout]} />
          <Text style={[styles.happy1, styles.manicTypo]}>Happy</Text>
          <Image
            style={[styles.happyIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/happy.png")}
          />
        </View>
        <View style={[styles.relax, styles.relaxLayout]}>
          <View style={[styles.relaxMood, styles.relaxLayout]}>
            <View style={[styles.relaxMoodChild, styles.rectChildLayout]} />
            <Text style={[styles.manic, styles.manicTypo]}>Manic</Text>
            <Image
              style={[styles.relaxIcon, styles.relaxIconPosition]}
              contentFit="cover"
              source={require("../assets/relax.png")}
            />
          </View>
          <View style={[styles.calm2, styles.focusLayout]}>
            <View style={[styles.calm2, styles.focusLayout]}>
              <View style={[styles.relaxMoodChild, styles.rectChildLayout]} />
              <Text style={[styles.manic, styles.manicTypo]}>Manic</Text>
              <Image
                style={[styles.relaxIcon1, styles.relaxIconPosition]}
                contentFit="cover"
                source={require("../assets/relax.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.focus, styles.focusLayout]}>
          <View style={[styles.calm2, styles.focusLayout]}>
            <View style={[styles.focusMoodChild, styles.rectChildLayout]} />
            <Text style={[styles.angry, styles.calm1Typo]}>Angry</Text>
            <Image
              style={[styles.fa6SolidfaceAngryIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/angry-face-icon.png")}
            />
          </View>
        </View>
        <View style={[styles.focusMood1, styles.focusLayout]}>
          <View style={[styles.focusMoodItem, styles.rectChildLayout]} />
          <Text style={[styles.angry, styles.calm1Typo]}>Sad</Text>
          <Image
            style={[styles.fa6SolidfaceAngryIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/angry-face-icon.png")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  rectChildLayout: {
    height: 62,
    borderRadius: Border.br_base,
    left: 0,
    width: 59,
    top: 0,
    position: "absolute",
  },
  calm1Typo: {
    height: 13,
    textAlign: "center",
    color: Color.gray3,
    fontSize: FontSize.size_xs,
    top: 71,
    fontFamily: FontFamily.epilogueMedium,
    fontWeight: "500",
    position: "absolute",
  },
  calmIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "22.46%",
    right: "21.02%",
    width: "56.51%",
    overflow: "hidden",
    position: "absolute",
  },
  focusLayout: {
    height: 84,
    width: 59,
    top: 0,
    position: "absolute",
  },
  manicTypo: {
    left: 11,
    height: 13,
    textAlign: "center",
    color: Color.gray3,
    fontSize: FontSize.size_xs,
    top: 71,
    fontFamily: FontFamily.epilogueMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  relaxLayout: {
    height: 100,
    width: 59,
    top: 0,
    position: "absolute",
  },
  relaxIconPosition: {
    left: "21.15%",
    right: "22.4%",
    width: "56.45%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  howAreYou: {
    fontSize: FontSize.size_base,
    color: Color.gray_300,
    textAlign: "left",
    fontFamily: FontFamily.epilogueMedium,
    fontWeight: "500",
  },
  rect: {
    backgroundColor: Color.cornflowerblue,
  },
  calm1: {
    left: 15,
    width: 30,
  },
  calmIcon: {
    height: "39.59%",
    top: "60.41%",
    bottom: "0%",
  },
  calmIcon1: {
    height: "39.78%",
    top: "17.14%",
    bottom: "43.07%",
  },
  calm2: {
    left: 0,
  },
  calm: {
    left: 83,
    width: 59,
    top: 0,
    height: 101,
    position: "absolute",
  },
  rect2: {
    backgroundColor: Color.hotpink,
  },
  happy1: {
    width: 38,
  },
  happyIcon: {
    top: 14,
    left: 13,
    width: 33,
    height: 33,
  },
  relaxMoodChild: {
    backgroundColor: Color.paleturquoise,
  },
  manic: {
    width: 37,
  },
  relaxIcon: {
    height: "37.03%",
    top: "62.97%",
    bottom: "0%",
  },
  relaxMood: {
    left: 0,
  },
  relaxIcon1: {
    height: "36.98%",
    top: "19.32%",
    bottom: "43.7%",
  },
  relax: {
    left: 166,
  },
  focusMoodChild: {
    backgroundColor: Color.sandybrown,
  },
  angry: {
    left: 12,
    width: 35,
  },
  fa6SolidfaceAngryIcon: {
    top: 15,
    left: 14,
    width: 32,
    height: 32,
  },
  focus: {
    left: 250,
  },
  focusMoodItem: {
    backgroundColor: Color.lightgreen,
  },
  focusMood1: {
    left: 333,
  },
  calmParent: {
    width: "100%",
    maxHeight: 101,
    marginTop: 20,
    height: 101,
  },
  howAreYouFeelingTodayParent: {
    top: 200,
    left: 19,
    position: "absolute",
  },
});

export default FeelingSection;
