import * as React from "react";
import { StyleSheet, View, ScrollView, StatusBar, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import CardContainer from "../../components/CardContainer";
import { FontFamily, Border, Color, FontSize } from "../../GlobalStyles";
import SectionGreetings from "../../components/SectionGreetings";
import { getTimeOfDay } from "../../utils/GetGrettings";
import tw from "twrnc";
import { Feather, Ionicons } from '@expo/vector-icons';


const Library = () => {
  const navigation = useNavigation();
  const greeting = getTimeOfDay();

  return (
    <View className="flex flex-1 bg-[#fbfbfb] -mt-10 ">
      <StatusBar barStyle="dark-content" />
      <SectionGreetings />

      <ScrollView
        className="mt-3 mx-4 mb-16"
        showsVerticalScrollIndicator={false}
      >


        <CardContainer
          textContent="Self Help Videos to help you In your Journey"
          description="text One"
          videolink="https://www.youtube.com/watch?v=5H7pQw5x7Rc"
        />

        <View style={styles.welcomeBackSarinaWrapper}>
          <Text style={[styles.welcomeBackSarina, styles.textTypo]}>
            More Videos
          </Text>
        </View>
        <CardContainer
          textContent="Lorem One"
          description="text One"
          videolink="https://www.youtube.com/watch?v=5H7pQw5x7Rc"
        />
        <CardContainer
          textContent="Lorem Two"
          description="text Two"
          videolink="https://www.youtube.com/watch?v=5H7pQw5x7Rc"
          />
        <CardContainer
          textContent="Lorem Three"
          description="text Three"
          videolink="https://www.youtube.com/watch?v=5H7pQw5x7Rc"
        />
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
