import React, {useEffect, useState, useCallback} from "react";
import { StyleSheet, View, ScrollView, FlatList, TouchableOpacity,Text, ActivityIndicator, Modal, TextInput, Button  } from "react-native";
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
    <View style={{ flex: 1, backgroundColor: '#fbfbfb' }}>
      <SectionGreetings />

      <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 12, marginBottom: 12, paddingVertical: 12 }}>
        <SortCommunity name="Latest" />
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


      <Modal
        animationType="slide"
        transparent={true}
        visible={showPostModal}
        onRequestClose={() => setShowPostModal(false)}
      >
        <View style={styles.postModalView}>
          <TextInput
            style={styles.postInput}
            placeholder="Write your post..."
            value={newPost}
            onChangeText={setNewPost}
            multiline
          />
          <TouchableOpacity style={styles.postButtonContainer} onPress={handleNewPost}>
            <Text style={styles.buttonText}>Post</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButtonContainer} onPress={() => setShowPostModal(false)}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>

        </View>
      </Modal>

      {/* Action Floating Button */}
      <TouchableOpacity style={styles.floatingButton} onPress={() => setShowPostModal(true)}>
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
  postModalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  postInput: {
    width: '80%',
    height: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  postButtonContainer: {
    backgroundColor: 'chocolate',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  cancelButtonContainer: {
    backgroundColor: '#573926',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Community;
