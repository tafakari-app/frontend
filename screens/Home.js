import * as React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Image } from "expo-image";
import SectionCard from "../components/SectionCard";
import SelfConquerorContainer from "../components/SelfConquerorContainer";
import FeelingSection from "../components/FeelingSection";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <SectionCard />
      <View style={styles.shadow} />
      <ScrollView
        style={styles.groupParent}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.groupLayout}>
          <View style={[styles.rectangle, styles.rectangleLayout]} />
          <Image
            style={[styles.maskGroupIcon, styles.maskGroupIconPosition]}
            contentFit="cover"
            source={require("../assets/mask-group.png")}
          />
          <View style={styles.peerGroupMeetup}>
            <Text style={[styles.library, styles.libraryClr]}>Library</Text>
            <Text
              style={[styles.letsOpenUp, styles.letsOpenUpTypo]}
            >{`Let’s open up to the things that matter the most `}</Text>
            <View style={[styles.watchNow, styles.watchLayout]}>
              <View style={[styles.watchNowChild, styles.watchLayout]} />
              <Text style={[styles.access, styles.startTypo]}>Access</Text>
              <Image
                style={[styles.evaarrowBackFillIcon, styles.evaarrowIconLayout]}
                contentFit="cover"
                source={require("../assets/evaarrowbackfill.png")}
              />
            </View>
          </View>
          <Image
            style={[styles.meetupIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/meetup-icon.png")}
          />
        </View>
        <SelfConquerorContainer />
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.rectangle1, styles.rectangleLayout]} />
          <Image
            style={[styles.maskGroupIcon, styles.maskGroupIconPosition]}
            contentFit="cover"
            source={require("../assets/mask-group2.png")}
          />
          <View style={styles.peerGroupMeetup}>
            <Text style={[styles.journal, styles.startClr]}>Journal</Text>
            <Text style={[styles.getBackChat, styles.startClr]}>
              Get back chat access and session credits
            </Text>
            <View style={[styles.watchNow, styles.watchLayout]}>
              <View style={[styles.watchNowChild, styles.watchLayout]} />
              <Text style={[styles.start, styles.startClr]}>Start</Text>
              <Image
                style={[
                  styles.evaarrowBackFillIcon1,
                  styles.evaarrowIconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/evaarrowbackfill-white.png")}
              />
            </View>
          </View>
          <Image
            style={[styles.meditationIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/meditation-icon.png")}
          />
        </View>
      </ScrollView>
      <FeelingSection />
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangleLayout: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    height: 151,
    width: 325,
    position: "absolute",
  },
  maskGroupIconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  libraryClr: {
    color: Color.dimgray_200,
    textAlign: "left",
  },
  letsOpenUpTypo: {
    opacity: 0.9,
    fontFamily: FontFamily.rubikRegular,
    lineHeight: 18,
    fontSize: FontSize.size_xs,
    marginTop: 8,
  },
  watchLayout: {
    height: 39,
    width: 138,
  },
  startTypo: {
    fontFamily: FontFamily.epilogueBold,
    fontWeight: "700",
    lineHeight: 32,
    fontSize: FontSize.size_base,
    top: 4,
    left: 0,
    position: "absolute",
  },
  evaarrowIconLayout: {
    height: 16,
    width: 16,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    left: 217,
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: 151,
    width: 325,
  },
  startClr: {
    color: Color.white,
    textAlign: "left",
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
  rectangle: {
    backgroundColor: Color.linen,
  },
  maskGroupIcon: {
    height: 151,
    width: 325,
  },
  library: {
    textAlign: "left",
    fontFamily: FontFamily.epilogueExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_3xl,
  },
  letsOpenUp: {
    marginTop: 8,
    textAlign: "left",
    color: Color.dimgray_200,
    width: 199,
  },
  watchNowChild: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  access: {
    color: Color.chocolate,
    textAlign: "left",
  },
  evaarrowBackFillIcon: {
    top: 10,
    left: 84,
  },
  watchNow: {
    marginTop: 8,
  },
  peerGroupMeetup: {
    top: 23,
    left: 20,
    width: 199,
    position: "absolute",
  },
  meetupIcon: {
    top: 36,
    width: 85,
    height: 80,
  },
  rectangle1: {
    backgroundColor: "#53a06e",
  },
  journal: {
    fontFamily: FontFamily.epilogueExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_3xl,
  },
  getBackChat: {
    width: 169,
    marginTop: 8,
    opacity: 0.9,
    fontFamily: FontFamily.rubikRegular,
    lineHeight: 18,
    fontSize: FontSize.size_xs,
  },
  start: {
    fontFamily: FontFamily.epilogueBold,
    fontWeight: "700",
    lineHeight: 32,
    fontSize: FontSize.size_base,
    top: 4,
    left: 0,
    position: "absolute",
  },
  evaarrowBackFillIcon1: {
    top: 11,
    left: 83,
  },
  meditationIcon: {
    top: 44,
    width: 80,
    height: 62,
  },
  rectangleGroup: {
    marginTop: 26,
  },
  groupParent: {
    top: 354,
    left: 27,
    position: "absolute",
    flex: 1,
  },
  home: {
    backgroundColor: Color.gray_100,
    width: "100%",
    height: 968,
    overflow: "hidden",
    flex: 1,
  },
});

export default Home;
