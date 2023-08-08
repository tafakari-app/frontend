import React, {useEffect, useState, useCallback} from "react";
import { StyleSheet, View, ScrollView, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import { Image } from "expo-image";
import TrendingCard from "../../components/TrendingCard";
import ContainerCardForm from "../../components/ContainerCardForm";
import WellnessHubSection from "../../components/WellnessHubSection";
import { Color, FontFamily, FontSize, Padding, Border } from "../../GlobalStyles";
import SectionGreetings from "../../components/SectionGreetings";
import SortCommunity from "../../components/SortCommunity";
import { Ionicons } from "@expo/vector-icons";
import { API_URL } from "../../app/context/AuthContext";
import axios from 'axios';
import { useNavigation,useIsFocused } from "@react-navigation/native";

const Community = () => {
  const [communityPosts, setCommunityPosts] = useState([])
  const isFocused = useIsFocused();

  const [isLoading, setIsLoading] = useState(true);




  const fetchPosts = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}community/`);

      if (response.data && Array.isArray(response.data.results)) {
        setCommunityPosts(response.data.results)
      } else {
        console.error("Invalid response data:", response.data);
      }
    } catch (error) {
      console.error("Error fetching community posts:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetchPosts();
  }, [isFocused, fetchPosts]);


  const renderPost = ({ item }) => (
    <ContainerCardForm
      ID={item?.ID}
      author={item?.author?.fullname}
      timestamp={item?.created_at}
      imageTimestamp={item?.imageTimestamp}
      description={item?.description}
      comments={item?.comments}
      likes={item?.likes}
    />
  );




  return (
    <View className="flex flex-1 bg-[#fbfbfb] -mt-10">
      <SectionGreetings />

      <View
        horizontal showsHorizontalScrollIndicator={false}
        className="flex flex-row  mx-4 mt-3 mb-3 py-3"
      >
        <SortCommunity name="Trending" />
      </View>


        {isLoading ? (
        <ActivityIndicator size="large" color="#FE8235" />
      ) : (
        <FlatList
          data={communityPosts}
          className="mx-4 mb-16"
          renderItem={renderPost}
          keyExtractor={(item) => item.ID} // Replace with your data's key extractor
          onEndReachedThreshold={0.5}
          showsVerticalScrollIndicator={false}
        />
      )}


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
