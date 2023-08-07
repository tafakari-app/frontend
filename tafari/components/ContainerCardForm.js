import React, { useState } from "react";
import { StyleSheet, View, Text, ImageSourcePropType, TouchableOpacity, TextInput, Button } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ContainerCardForm = ({ author = 'Pigeon Car',
  timestamp,
  content = 'Default content here',
  imageTimestamp,
  commentsCount = 0, likes }) => {
  // likes
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  // comments
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [commentCount, setCommentCount] = useState(commentsCount);


  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const handlePostComments = () => {
    console.log("Comment posted:", comments);
    if (newComment.trim() !== '') {
      setComments(prevComments => [...prevComments, newComment]);
      setCommentCount(prevCount => prevCount + 1);
    }
    // TODO: Add your logic to handle the comment (e.g., update state, send to server)

    // Clear the comment input after posting
    setNewComment('');
  };

  return (
    <View style={styles.rectangleParent}>
      <View style={styles.rectangle} />
      <View style={styles.pigeonCarParent}>
        <Text style={styles.pigeonCar}>{author}</Text>
        <Text style={styles.hrsAgo}>{timestamp}</Text>
        <Text
          style={styles.isThereA}
        >{content}</Text>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={imageTimestamp}
        />
      </View>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.wrapper, styles.parentLayout]}>
          <Text style={[styles.text, styles.textTypo]}>{commentCount}</Text>
        </View>
        <TouchableOpacity onPress={() => setShowComments(!showComments)}>
          <Image
            style={styles.akarIconscomment}
            contentFit="cover"
            source={require('../assets/comment-icon.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.parent, styles.parentLayout]}>
        <Text style={[styles.text1, styles.textTypo]}>{likeCount}</Text>
        <TouchableOpacity onPress={handleLike}>
          <Image
            style={[styles.antDesignlikeOutlinedIcon, styles.iconLayout]}
            contentFit="cover"
            source={isLiked ? require('../assets/like-button-active.png') : require('../assets/like-button.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.groupItem} />
      <Image
        style={[styles.bxshareIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/share-icon.png")}
      />
      {showComments && (
        <View style={styles.commentSection}>
          <TouchableOpacity style={styles.closeButton} onPress={() => setShowComments(false)}>
            <Text style={{ fontWeight: 'bold' }}>X</Text>
          </TouchableOpacity>
          {comments.map((comment, index) => (
            <Text key={index} style={styles.commentText}>{comment}</Text>
          ))}
          <View style={styles.commentInputWrapper}>
            <TextInput
              style={styles.commentInput}
              placeholder="Write a comment..."
              value={newComment}
              onChangeText={setNewComment}
            />
            <TouchableOpacity style={styles.postButton} onPress={handlePostComments}>
              <Text>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: 20,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 20,
    fontSize: 13,
    color: Color.dimgray_100,
    fontFamily: FontFamily.rubikRegular,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 20,
    overflow: "hidden",
    height: 20,
    position: "absolute",
  },
  rectangle: {
    height: 108,
    left: 0,
    top: 0,
    position: "absolute",
    width: 325,
  },
  pigeonCar: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.rubikMedium,
    textAlign: "left",
    color: Color.dimgray_200,
    lineHeight: 18,
    left: 52,
    top: 0,
    position: "absolute",
  },
  hrsAgo: {
    left: 126,
    fontSize: FontSize.size_xs,
    opacity: 0.7,
    color: Color.dimgray_100,
    fontFamily: FontFamily.rubikRegular,
    textAlign: "left",
    lineHeight: 18,
    top: 0,
    position: "absolute",
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
  pigeonCarParent: {
    left: 1,
    width: 319,
    height: 58,
    top: 0,
    position: "absolute",
  },
  text: {
    left: 0,
  },
  wrapper: {
    left: 26,
    width: 8,
    top: 0,
  },
  akarIconscomment: {
    top: 2,
    width: 18,
    height: 18,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  groupParent: {
    left: 122,
    width: 34,
    top: 74,
  },
  text1: {
    left: 27,
  },
  antDesignlikeOutlinedIcon: {
    left: 0,
    top: 0,
  },
  parent: {
    left: 53,
    width: 41,
    top: 74,
  },
  groupItem: {
    top: 110,
    borderStyle: "solid",
    borderColor: "rgba(217, 216, 216, 0.3)",
    borderTopWidth: 1,
    width: 326,
    height: 1,
    left: 0,
    position: "absolute",
  },
  bxshareIcon: {
    left: 305,
    top: 74,
  },
  rectangleParent: {
    height: 110,
    marginTop: 16,
    width: 325,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    top: 1,
    left: 5,

  },
  commentSection: {
    padding: 10,
    backgroundColor: 'linen',
    width: '100%',
  },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  postButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginRight: 5,
  },
  commentText: {
    marginBottom: 5,
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
  },
  commentInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default ContainerCardForm;
