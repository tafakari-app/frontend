import * as React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Image } from "expo-image";
import TrendingCard from "../components/TrendingCard";
import ContainerCardForm from "../components/ContainerCardForm";
import WellnessHubSection from "../components/WellnessHubSection";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Community = () => {
  return (
    <View style={styles.community}>
      <View style={styles.shadow} />
      <ScrollView
        style={styles.groupParent}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <TrendingCard />
        <ContainerCardForm
          timestamp="3 hrs ago"
          imageTimestamp={require("../assets/ellipse-22.png")}
        />
        <ContainerCardForm
          timestamp="1 hr ago"
          imageTimestamp={require("../assets/ellipse-21.png")}
        />
        <ContainerCardForm
          timestamp="2 min ago"
          imageTimestamp={require("../assets/ellipse-23.png")}
        />
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.rectangle, styles.rectangleLayout]} />
          <View style={styles.pigeonCarParent}>
            <Text style={styles.pigeonCar}>Pigeon Car</Text>
            <Text style={[styles.hrsAgo, styles.textTypo]}>3 hrs ago</Text>
            <Text
              style={styles.isThereA}
            >{`Is there a therapy which can cure crossdressing & bdsm compulsion?`}</Text>
            <Image
              style={styles.groupChild}
              contentFit="cover"
              source={require("../assets/ellipse-24.png")}
            />
          </View>
          <View style={[styles.groupContainer, styles.parentLayout]}>
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
      </ScrollView>
      <Image
        style={styles.communityChild}
        contentFit="cover"
        source={require("../assets/edit-button-icon.png")}
      />
      <View style={styles.trendingWrapper}>
        <Text style={[styles.trending, styles.trendingTypo]}>Trending</Text>
      </View>
      <View style={[styles.relationshipWrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.relationship, styles.trendingTypo]}>
          Relationship
        </Text>
      </View>
      <View style={[styles.selfCareWrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.relationship, styles.trendingTypo]}>
          Self Care
        </Text>
      </View>
      <WellnessHubSection />
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
    height: 108,
    width: 325,
  },
  textTypo: {
    color: Color.dimgray_100,
    fontFamily: FontFamily.rubikRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    lineHeight: 18,
    top: 0,
    position: "absolute",
  },
  parentLayout: {
    height: 18,
    position: "absolute",
  },
  iconLayout: {
    width: 18,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  trendingTypo: {
    lineHeight: 30,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  wrapperFlexBox: {
    backgroundColor: Color.whitesmoke_300,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    borderRadius: Border.br_4xs,
    top: 145,
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
  rectangle: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  pigeonCar: {
    fontFamily: FontFamily.rubikMedium,
    textAlign: "left",
    color: Color.dimgray_200,
    lineHeight: 18,
    fontSize: FontSize.size_sm,
    left: 52,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  hrsAgo: {
    left: 126,
    opacity: 0.7,
  },
  isThereA: {
    top: 22,
    width: 267,
    fontFamily: FontFamily.rubikRegular,
    fontSize: FontSize.size_xs,
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
    left: 23,
    width: 8,
    top: 0,
  },
  akarIconscomment: {
    top: 1,
    width: 16,
    height: 16,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupContainer: {
    left: 115,
    width: 31,
    top: 74,
  },
  text1: {
    left: 24,
  },
  antDesignlikeOutlinedIcon: {
    left: 0,
    top: 0,
  },
  parent: {
    left: 53,
    width: 37,
    top: 74,
  },
  groupItem: {
    top: 108,
    borderStyle: "solid",
    borderColor: "rgba(217, 216, 216, 0.25)",
    borderTopWidth: 1,
    width: 326,
    height: 1,
    left: 0,
    position: "absolute",
  },
  bxshareIcon: {
    left: 307,
    top: 74,
  },
  rectangleParent: {
    marginTop: 16,
  },
  groupParent: {
    top: 203,
    left: 19,
    position: "absolute",
    flex: 1,
  },
  communityChild: {
    top: 808,
    left: 289,
    width: 80,
    height: 80,
    position: "absolute",
  },
  trending: {
    fontWeight: "600",
    fontFamily: FontFamily.epilogueSemiBold,
    color: Color.gray_100,
  },
  trendingWrapper: {
    backgroundColor: Color.chocolate,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_mini,
    borderRadius: Border.br_4xs,
    top: 145,
    flexDirection: "row",
    left: 19,
    position: "absolute",
  },
  relationship: {
    fontFamily: FontFamily.epilogueMedium,
    color: Color.gray_200,
    fontWeight: "500",
    lineHeight: 30,
  },
  relationshipWrapper: {
    left: 123,
  },
  selfCareWrapper: {
    left: 252,
  },
  community: {
    backgroundColor: Color.gray_100,
    width: "100%",
    height: 968,
    overflow: "hidden",
    flex: 1,
  },
});

export default Community;
