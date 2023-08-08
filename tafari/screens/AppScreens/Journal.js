import * as React from "react";
import { StyleSheet, View, ActivityIndicator, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation,useIsFocused } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import SectionGreetings from "../../components/SectionGreetings";
import JournalCard from "../../components/JournalCard";
import { API_URL } from "../../app/context/AuthContext";
import axios from "axios";
import { useState, useEffect } from "react";


const Journal = () => {
  const navigation = useNavigation();
  const [journalEntries, setJournalEntries] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const isFocused = useIsFocused();
  const getAllJournals = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${API_URL}journals/`);
      setJournalEntries(res.data);
    } catch (error) {
      console.error("Error fetching journal entries:", error);
    } finally {
      setIsLoading(false);
    }
  };

 useEffect(() => {
    if (isFocused) {
      getAllJournals();
    }
  }, [isFocused]);

  return (
    <View style={styles.container} className="flex flex-1 mb-6 bg-[#fbfbfb] -mt-10 ">
      <StatusBar barStyle="dark-content" />
      <SectionGreetings />

      {
        isLoading ? <ActivityIndicator size="large" color="#FE8235" /> : (
          <ScrollView className="mt-5 mx-4 mb-16" showsVerticalScrollIndicator={false}>
            {journalEntries?.map((message, index) => (
              <JournalCard
                key={index}
                created_at={message?.created_at}
                title={message?.title}
                content={message?.description}
                emotion={message?.emotion}
                emotion_predications={message?.emotion_predications}
              />
            ))}
          </ScrollView>
        )
      }

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddJournalEntry')}
      >
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
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



export default Journal;
