import React, { useState } from 'react';
import { View, Platform, StatusBar, ActivityIndicator, TextInput, StyleSheet, DatePickerIOS, Text, TouchableOpacity, DatePickerAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { API_URL } from "../../app/context/AuthContext";


const AddJournalEntry = () => {
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
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

    const handleSave = async () => {
        if (title !== '' && content !== '') {
            setLoading(true); // Start loading

            const data = {
                title: title,
                description: content,
            };

            try {
                const result = await axios.post(`${API_URL}journals/create-Journal/`, data);
                if (result.status === 201) {
                    navigation.goBack();
                } else {
                    alert("Something went wrong! Please try again later");
                }
            } catch (error) {
                alert("An error occurred. Please try again later");
            }

            setLoading(false); // Stop loading
        } else {
            alert("Please fill in both title and description.");
        }
    };

    return (
        <View className="px-4 " style={styles.container}>
            <StatusBar translucent={true} />
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
                <TouchableOpacity style={styles.saveButton} onPress={handleSave} disabled={loading}>
                    {loading ? (
                        <ActivityIndicator color="white" size="small" />
                    ) : (
                        <Text style={styles.saveButtonText}>SAVE</Text>
                    )}
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
