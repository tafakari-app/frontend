import * as React from "react";
import { StyleSheet, View, Text, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import SectionGreetings from "../components/SectionGreetings";
import JournalCard from '../components/JournalCard';
import { Ionicons } from '@expo/vector-icons';


const Journal = () => {
  const navigation = useNavigation();

  const messages = [
    { date: '04 Aug', title: 'Work', content: 'Work in this team is great.' },
    { date: '03 Aug', title: 'Summatives', content: 'I had two summatives due today but I didn\'t do either well. They\'re both incomplete ... God please' },
    { date: '02 Aug', title: 'Laure\'s Birthday', content: 'Today is Laure\'s birthday, there were two cakes, I gave her sandals, some people came over' },
    { date: '01 Aug', title: 'Charis', content: 'I talked to Charis today, all is well. I will go to see him on Wednesday.' },
    { date: '31 Jul', title: 'Meeting', content: 'Had a productive team meeting today. Discussed the upcoming project milestones.' },
    { date: '30 Jul', title: 'Exercise', content: 'Went for a 5km run in the park. Felt refreshing.' },
    { date: '29 Jul', title: 'Movie Night', content: 'Watched a movie with family. It was a great bonding time.' },
    // ... Add more messages as needed
  ];

  return (
    <View style={styles.container} className="flex flex-1 bg-[#fbfbfb] -mt-10 ">
      <StatusBar barStyle="dark-content" />
      <SectionGreetings />
      <ScrollView className="mt-5 mx-4 mb-16" showsVerticalScrollIndicator={false}>
        {messages.map((message, index) => (
          <JournalCard key={index} date={message.date} title={message.title} content={message.content} />
        ))}
      </ScrollView>
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
