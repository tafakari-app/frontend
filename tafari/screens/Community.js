import React from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import TrendingCard from "../components/TrendingCard";
import ContainerCardForm from "../components/ContainerCardForm";
import WellnessHubSection from "../components/WellnessHubSection";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import SectionGreetings from "../components/SectionGreetings";
import SortCommunity from "../components/SortCommunity";
import { Ionicons } from "@expo/vector-icons";

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

      {/* Action Floating Button */}
      <TouchableOpacity
        style={styles.floatingButton}
      >
        <Ionicons name="pencil" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 70,
    right: 20,
    backgroundColor: "#FE8235",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
});

export default Community;
