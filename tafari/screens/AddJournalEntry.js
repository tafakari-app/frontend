import React, { useState } from 'react';
import { View, Platform, Button, TextInput, StyleSheet, DatePickerIOS, Text, TouchableOpacity, DatePickerAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddJournalEntry = () => {
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const showAndroidDatePicker = async () => {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                date: date,
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                setDate(new Date(year, month, day));
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    };

    const handleSave = () => {
        // Save the journal entry (e.g., to a state or database)
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.exitButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.saveButtonText}>X</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    if (Platform.OS === 'android') {
                        showAndroidDatePicker();
                    } else {
                        setShowDatePicker(true);
                    }
                }}>
                    <Text style={styles.dateText}>
                        {`${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.saveButtonText}>SAVE</Text>
                </TouchableOpacity>
            </View>

            {showDatePicker && Platform.OS === 'ios' && (
                <DatePickerIOS date={date} onDateChange={setDate} />
            )}

            <TextInput
                value={title}
                onChangeText={setTitle}
                style={styles.titleInput}
                placeholder="Title"
                underlineColorAndroid="transparent"
            />
            <TextInput
                value={content}
                onChangeText={setContent}
                style={styles.contentInput}
                placeholder="What's on your mind?"
                multiline
                underlineColorAndroid="transparent"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'linen',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    closeText: {
        fontSize: 18,
        color: '#573926',
    },
    dateText: {
        fontSize: 18,
        color: 'chocolate',
        fontWeight: '700',
    },
    titleInput: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#573926',
    },
    contentInput: {
        fontSize: 16,
        fontWeight: '500',
    },
    saveButton: {
        backgroundColor: 'chocolate',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        alignItems: 'center',
    },
    saveButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    exitButton: {
        backgroundColor: 'chocolate',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        alignItems: 'center',
    },
});

export default AddJournalEntry;
