// JournalCard.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontFamily, Color, FontSize } from '../GlobalStyles';

const JournalCard = ({ created_at, title, content, emotion, emotion_predications }) => {
    const isoDateString = created_at
    const date = new Date(isoDateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const humanReadableDate = date.toLocaleDateString('en-US', options);
    const [showMore, setShowMore] = useState(false)


    return (
        <TouchableOpacity
            onPress={() => setShowMore(!showMore)}
            className="p-6 mt-10 bg-[#fef3e7] rounded-md"
        >
            <Text style={styles.title}>{title}</Text>
            <Text
                style={styles.content}
                numberOfLines={showMore ? 0 : 2}
            >
                {content}
            </Text>

            {/* <View className="flex flex-row justify-between items-center mt-5 space-x-5">
                <Text style={styles.content}>
                    Emotion: {
                        emotion === 'postive' ? <Text className="text-green-500"> Positive 😄 </Text> : <Text className="text-red-500">Negative 😔 </Text>
                    }
                </Text>
                <Text style={styles.content} numberOfLines={2}>Predications: {emotion_predications} %</Text>
            </View> */}
            <Text style={styles.date}>{humanReadableDate}</Text>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: FontSize.size_3xl,
        fontWeight: "800",
        color: "#573926",
    },
    date: {
        fontSize: FontSize.size_xs,
        fontWeight: "500",
        color: Color.dimgray_200,
        marginTop: 5,
    },
    content: {
        fontFamily: FontFamily.rubikRegular,
        color: "#371B34",
        marginTop: 6,
        fontSize: FontSize.size_sm,
    },
});

export default JournalCard;
