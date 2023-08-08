import * as React from "react";
import { StyleSheet, View, Text, ImageSourcePropType, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from "axios";
import { API_URL } from "../app/context/AuthContext";
import { useState } from "react";

const ContainerCardForm = ({ ID, author, timestamp, imageTimestamp, description, likes, comments }) => {
  const isoDateString = timestamp;
  const postDate = new Date(isoDateString);
  const currentDate = new Date();
  const timeDifference = currentDate - postDate;
  const [isLiked, setIsLiked] = useState(false);


  let humanReadableDate;

  if (timeDifference < 1000 * 60 * 60) { // Less than an hour
    const minutes = Math.floor(timeDifference / (1000 * 60));
    humanReadableDate = `${minutes}m`;
  } else if (timeDifference < 1000 * 60 * 60 * 24) { // Less than a day
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    humanReadableDate = `${hours}h`;
  } else if (timeDifference < 1000 * 60 * 60 * 24 * 30) { // Less than a month
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    humanReadableDate = `${days}d`;
  } else {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    humanReadableDate = postDate.toLocaleDateString('en-US', options);
  }

  const handLikeButton = async () => {
    try {
      const response = await axios.post(`${API_URL}community/like-post/${ID}/`);
      if (response.status === 200 ){
        setIsLiked(true);
      }
    } catch (error) {
      alert("Error: " + error)
    }
  }

  return (
    <View style={styles.rectangleParent}>
      <View className="mb-10">
        <View className="flex flex-row  justify-center mb-5 items-center">
          <Text style={styles.typos} >{author} - </Text>
          <Text className="ml-1 text-[12px]" style={styles.hrsAgo}>{humanReadableDate} Ago</Text>
        </View>

        <Text
          style={styles.isThereA}
          className="mb-4"
          numberOfLines={4}
        >{description}</Text>

        <MaterialCommunityIcons
          style={styles.groupChild}
          name="account-circle"
          size={35}
          color="black"
        />
      </View>

      <View className="flex flex-row justify-end mt-1 space-x-5">
        <TouchableOpacity
          onPress={handLikeButton}
          className="flex flex-row justify-center items-center space-x-2"
        >
          <Image
            className="h-6 w-6"
            contentFit="cover"
            source={isLiked ? require("../assets/like-button.png") : require("../assets/like-button-active.png")}
          />
          <Text >{likes.length}</Text>

        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row justify-center items-center space-x-2">
          <Image
            className="h-6 w-6"
            contentFit="cover"
            source={require("../assets/comment-icon.png")}
          />
          <View >
            <Text >{comments.length}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            className="h-6 w-6"
            contentFit="cover"
            source={require("../assets/share-icon.png")}
          />
        </TouchableOpacity>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  typos: {
    fontSize: 13,
    color: Color.dimgray_100,
    fontFamily: FontFamily.epilogueRegular
  },

  textTypo: {
    color: Color.dimgray_100,
    fontFamily: FontFamily.rubikRegular,
  },
  hrsAgo: {
    fontSize: FontSize.size_xs,
    opacity: 0.7,
    color: Color.dimgray_100,
    fontFamily: FontFamily.rubikRegular,

  },
  isThereA: {
    top: 22,
    fontSize: FontSize.size_smi,
    width: 267,
    fontFamily: FontFamily.rubikRegular,
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

  rectangleParent: {
    height: 110,
    marginTop: 16,
    width: 325,
  },
});

export default ContainerCardForm;
