// JournalCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontFamily, Color, FontSize } from '../GlobalStyles';

const JournalCard = ({ date, title, content }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.content} numberOfLines={2}>{content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fef3e7',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        height: 120,
    },
    title: {
        fontSize: FontSize.size_base,
        color: Color.orange_100,
        fontFamily: FontFamily.epilogueExtraBold,
        marginBottom: 5,
    },
    date: {
        fontSize: FontSize.size_base,
        color: Color.dimgray_200,
        fontFamily: FontFamily.epilogueExtraBold,
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
        color: Color.dimgray_100,
        fontFamily: FontFamily.epilogueMedium,
    },
});

export default JournalCard;
