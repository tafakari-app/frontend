import * as React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Image } from "expo-image";
import TrendingCard from "../components/TrendingCard";
import ContainerCardForm from "../components/ContainerCardForm";
import WellnessHubSection from "../components/WellnessHubSection";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import SectionGreetings from "../components/SectionGreetings";
import SortCommunity from "../components/SortCommunity";


const Community = () => {
  return (
    <View className="flex flex-1 bg-[#fbfbfb] -mt-10">
      <SectionGreetings />

      <View
        horizontal showsHorizontalScrollIndicator={false}
        className="flex flex-row  mx-4 mt-3 mb-3 py-3"
      >

        <SortCommunity name="Trending" />
      </View>

      <ScrollView
        className="mx-4 mb-16"
        showsHorizontalScrollIndicator={false}
      >
        <TrendingCard />
        <ContainerCardForm
          timestamp="3 hrs ago"
          imageTimestamp={require("../assets/ellipse-22.png")}
        />
        <ContainerCardForm
          timestamp="3 hrs ago"
          imageTimestamp={require("../assets/ellipse-22.png")}
        />
        <ContainerCardForm
          timestamp="3 hrs ago"
          imageTimestamp={require("../assets/ellipse-22.png")}
        />
        <ContainerCardForm
          timestamp="3 hrs ago"
          imageTimestamp={require("../assets/ellipse-22.png")}
        />
        <ContainerCardForm
          timestamp="3 hrs ago"
          imageTimestamp={require("../assets/ellipse-22.png")}
        />
        <ContainerCardForm
          timestamp="3 hrs ago"
          imageTimestamp={require("../assets/ellipse-22.png")}
        />

      </ScrollView>
    </View>
  );
};


export default Community;
