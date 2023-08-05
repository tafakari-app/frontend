import * as React from "react";
import { StyleSheet, View, ScrollView, StatusBar, TouchableOpacity, Text } from "react-native";
import { Image } from "expo-image";
import SelfConquerorContainer from "../components/SelfConquerorContainer";
import FeelingSection from "../components/FeelingSection";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import SectionGreetings from "../components/SectionGreetings";
import tw from "twrnc";
import { getTimeOfDay } from "../utils/GetGrettings";
import { Feather, Ionicons } from '@expo/vector-icons';




const Home = () => {
  const feelings = [
    { name: 'Happy', icon: 'smile', color: '#FFC107' },
    { name: 'Sad', icon: 'frown', color: '#2196F3' },
    { name: 'Excited', icon: 'heart', color: '#E91E63' },
    { name: 'Angry', icon: 'user-x', color: '#F44336' },
    { name: 'Anxious', icon: 'wind', color: '#FF9800' },
    { name: 'Depressed', icon: 'x-circle', color: '#9C27B0' },
    { name: 'Stressed', icon: 'zap-off', color: '#4CAF50' },
  ];

  // function to get the greetings in the day
  const greeting = getTimeOfDay();

  return (
    <View className="flex flex-1 bg-[#fbfbfb] -mt-10 ">
      <StatusBar light className="bg-[#fbfbfb]" />
      <SectionGreetings />

      <ScrollView
        className="mt-3 mx-4 mb-32"
        showsVerticalScrollIndicator={false}
      >
        {/* Greetings section */}
        <View className="flex mt-3 flex-row mb-3">
          <Text className="text-2xl font-bold text-[#371B34]">
            <Text className="font-medium">{greeting}, </Text> {'\n'}
            Brian!
          </Text>
        </View>


        {/* Self Conqueror and feelings section */}
        <View style={styles.container}>
          <Text style={styles.heading}>How are you feeling today?</Text>
          <ScrollView
            horizontal
            className="py-3"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
          >
            {feelings.map((feeling, index) => (
              <View key={index} className="flex align-middle">
                <TouchableOpacity key={index} style={[styles.feelingBox, { backgroundColor: feeling.color }]}>
                  <Feather name={feeling.icon} size={50} color="white" />
                </TouchableOpacity>
                <Text className="text-[#828282] font-semibold text-[12px] ml-4">{feeling.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View className="mt-5 py-5 flex flex-row bg-[#FEF3E7] rounded-xl justify-between items-center" >
          <View className="flex mt-4 px-4">
            <Text className="text-[22px] mb-3 font-bold text-[#573926]">
              Library
            </Text>
            <Text
              className="text-md mb-3 font-[12px] text-[#371B34]"
            >
              Let’s open up to the things that {"\n"}matter the most
            </Text>

            <TouchableOpacity
              className="mt-4 ml-6"
            >
              <Text className="text-[#FE8235] font-[16px]">Access </Text>
            </TouchableOpacity>
          </View>
          <Image
            contentFit="cover"
            className="h-50 w-50"
            source={require("../assets/icons/ion_journal.png")}
          />

        </View>

        <View className="flex mt-9 flex-row justify-around items-center">
          <TouchableOpacity
            className="flex  px-9 py-4 rounded-3xl  flex-row items-center justify-between bg-[#F4F3F1]"
          >
            <Ionicons name="journal" size={24} color="black" />
            <Text className="ml-2 text-[#573926] text-[14px]">Journal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex  px-9 py-4 rounded-3xl  flex-row items-center justify-between bg-[#F4F3F1]"
          >
            <Ionicons name="journal" size={24} color="black" />
            <Text className="ml-2 text-[#573926] text-[14px]">Journal</Text>
          </TouchableOpacity>

        </View>

        <View className="bg-[#F8F6F6] px-8 py-5">
          <Text className="text-[#707070] text-[14px]">“It is better to conquer yourself than to win a thousand battles”</Text>
        </View>

        {/* last container  */}

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

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#371B34',
  },
  scrollContainer: {
    paddingVertical: 10,
  },
  feelingBox: {
    marginRight: 24,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  feelingText: {
    textAlign: 'center',
    color: 'white',
    marginTop: 5,
    fontWeight: 'bold',
  },
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
    width: '100%',
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
    height: 200,
    width: '100%',
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
