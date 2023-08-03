import * as React from "react";
import { StyleSheet, View, ScrollView, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import CardContainer from "../components/CardContainer";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const Library = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.library}>
      <View style={styles.shadow} />
      <Image
        style={styles.naviationRectangleIcon}
        contentFit="cover"
        source={require("../assets/naviation-rectangle.png")}
      />
      <ScrollView
        style={styles.headerParent}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
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
        <CardContainer textContent="Lorem " />
        <View style={styles.welcomeBackSarinaWrapper}>
          <Text style={[styles.welcomeBackSarina, styles.textTypo]}>
            More Videos
          </Text>
        </View>
        <CardContainer textContent="Lorem One" />
        <CardContainer textContent="Lorem Two" />
        <CardContainer textContent="Lorem Three" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  groupChildPosition: {
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.epilogueMedium,
    fontWeight: "500",
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
    top: "50%",
    left: "50%",
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
  welcomeBackSarina: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    color: Color.gray_300,
    width: 308,
  },
  welcomeBackSarinaWrapper: {
    height: 24,
    marginTop: 26,
    width: 308,
  },
  headerParent: {
    top: 45,
    left: 19,
    position: "absolute",
    flex: 1,
  },
  library: {
    backgroundColor: Color.gray_100,
    height: 968,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Library;
