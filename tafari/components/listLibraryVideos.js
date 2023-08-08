import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";
import { WebView } from "react-native-webview";
import YoutubePlayer from 'react-native-youtube-iframe';

const ListLibraryVideos = ({ video }) => {
  const [showVideo, setShowVideo] = React.useState(false);

  const openYouTubeVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{video?.title}</Text>
        <Text style={styles.author}>Author Name - {video?.author}</Text>
        <Text style={styles.description} numberOfLines={showVideo ? 0 : 2}>{video?.description}</Text>

        {showVideo && (
          <View className=" mt-4 ">
            <YoutubePlayer
              width={'100%'}
              height={300}
              play={true}
              videoId={video?.link}
            />
          </View>
        )}

        <TouchableOpacity onPress={openYouTubeVideo}>
          <View style={styles.watchButton}>
            <Text style={styles.watchText}>Watch</Text>
            <Image
              style={styles.playIcon}
              source={require("../assets/media-play-icon.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  cardContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#FEF3E7",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontSize: FontSize.size_3xl,
    fontWeight: "800",
    color: "#573926",
  },
  author: {
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    color: Color.dimgray_200,
    marginTop: 10,
    marginBottom:10,
  },
  description: {
    fontFamily: FontFamily.rubikRegular,
    color: "#371B34",
    marginTop: 6,
    fontSize:FontSize.size_sm,
  },
  videoContainer: {
    height: 400,
    width: "100%",
  },
  watchButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  watchText: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.epilogueBold,
    color: "#FF5733",
    marginRight: 10,
  },
  playIcon: {
    width: 30,
    height: 30,
  },
};

export default ListLibraryVideos;
