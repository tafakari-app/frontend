import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Modal, TextInput, Button } from "react-native";
import { Image } from "expo-image";
import TrendingCard from "../../components/TrendingCard";
import ContainerCardForm from "../../components/ContainerCardForm";
import WellnessHubSection from "../../components/WellnessHubSection";
import { Color, FontFamily, FontSize, Padding, Border } from "../../GlobalStyles";
import SectionGreetings from "../../components/SectionGreetings";
import SortCommunity from "../../components/SortCommunity";
import { Ionicons } from "@expo/vector-icons";

const Community = () => {

  const [posts, setPosts] = useState([
    {
      author: 'Pigeon Car',
      content: 'Stuff about the post',
      timestamp: '3 hrs ago',
      imageTimestamp: require('../../assets/ellipse-22.png'),
      comments: 2,
      likes: 0,
    }
  ]);
  const [showPostModal, setShowPostModal] = useState(false);
  const [newPost, setNewPost] = useState('');

  const handleNewPost = () => {
    const newPostData = {
      author: 'User', // You can replace 'User' with the actual user's name if available
      content: newPost,
      timestamp: new Date().toLocaleString(),
      imageTimestamp: null, // You can set a default image or leave it null
      comments: 0,
      likes: 0,
    };
    setPosts([newPostData, ...posts]); // Add the new post to the beginning of the list
    setNewPost('');
    setShowPostModal(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fbfbfb' }}>
      <SectionGreetings />

      <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 12, marginBottom: 12, paddingVertical: 12 }}>
        <SortCommunity name="Latest" />
      </View>

      <ScrollView
        style={{ marginHorizontal: 16, marginBottom: 64 }}
        showsVerticalScrollIndicator={false}
      >
        <TrendingCard />
        {posts.map((post, index) => (
          <ContainerCardForm
            key={index}
            author={post.author}
            content={post.content}
            timestamp={post.timestamp}
            imageTimestamp={post.imageTimestamp}
            comments={post.comments}
            likes={post.likes}
          />
        ))}
      </ScrollView>

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
