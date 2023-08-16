import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Color, FontFamily, FontSize, } from "../../GlobalStyles";
import { Calendar } from 'react-native-calendars';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryScatter, VictoryPie, VictoryLabel, Line } from 'victory-native';


const Profile = () => {

    const [userName, setUserName] = useState();
    useEffect(() => {
        const getUser = async () => {
            const user = await axios.get(`${API_URL}users/users/me/`);
            setUserName(user.data.fullname);
        }
        getUser();
    }, []);

    const [userData, setUserData] = useState({
        username: userName,
        profilePic: "../../assets/ellipse-2.png",
        // ... any other user data
    });

    const EMOTION_COLORS = {
        "Happy": "#ffc107",
        "Sad": "#2196f3",
        "Excited": "#e91e63",
        "Angry": "#f44336",
        "Anxious": "#ff9800",
        "Depressed": "#9c27b0",
        "Stressed": "#4caf50"
    };

    const RenderColorLegend = ({ emotion, color }) => (
        <View style={styles.legendItem}>
            <View style={[styles.colorBox, { backgroundColor: color }]} />
            <Text style={styles.legendText}>{emotion}</Text>
        </View>
    );

    // Sample data for the calendar
    const markedDates = {
        '2023-08-01': { selected: true, marked: true, selectedColor: EMOTION_COLORS['Depressed'] },
        '2023-08-02': { selected: true, marked: true, selectedColor: EMOTION_COLORS['Sad'] },
        '2023-08-03': { selected: true, marked: true, selectedColor: EMOTION_COLORS['Sad'] },
        '2023-08-04': { selected: true, marked: true, selectedColor: EMOTION_COLORS['Anxious'] },
        '2023-08-05': { selected: true, marked: true, selectedColor: EMOTION_COLORS['Depressed'] },
        '2023-08-06': { selected: true, marked: true, selectedColor: EMOTION_COLORS['Angry'] },
        '2023-08-07': { selected: true, marked: true, selectedColor: EMOTION_COLORS['Anxious'] },
        '2023-08-08': { selected: true, marked: true, selectedColor: EMOTION_COLORS['Depressed'] },
        '2023-08-09': { selected: true, marked: true, selectedColor: EMOTION_COLORS['Depressed'] },
        '2023-08-10': { selected: true, marked: true, selectedColor: EMOTION_COLORS['Depressed'] },
        '2023-08-11': { selected: true, marked: true, selectedColor: EMOTION_COLORS['Happy'] },
        '2023-08-12': { selected: true, marked: true, selectedColor: EMOTION_COLORS['Anxious'] },
        '2023-08-13': { selected: true, marked: true, selectedColor: EMOTION_COLORS['Happy'] },
        '2023-08-14': { selected: true, marked: true, selectedColor: EMOTION_COLORS['Happy'] },
        '2023-08-15': { selected: true, marked: true, selectedColor: EMOTION_COLORS['Anxious'] },
        '2023-08-16': { selected: true, marked: true, selectedColor: EMOTION_COLORS['Depressed'] },
        '2023-08-17': { selected: true, marked: true, selectedColor: EMOTION_COLORS['Stressed'] }
    }


    // Sample data for the chart
    const data = [
        { date: "2023-08-01", emotion: 3 },  // Angry
        { date: "2023-08-02", emotion: 6 },  // Excited
        { date: "2023-08-03", emotion: 1 },  // Stressed
        { date: "2023-08-04", emotion: 4 },  // Sad
        { date: "2023-08-05", emotion: 0 },  // Depressed
        { date: "2023-08-06", emotion: 5 },  // Happy
        { date: "2023-08-07", emotion: 5 },  // Anxious
        { date: "2023-08-08", emotion: 6 },
        { date: "2023-08-09", emotion: 1 },
        { date: "2023-08-10", emotion: 4 },
        { date: "2023-08-11", emotion: 5 },
        { date: "2023-08-12", emotion: 3 },
        { date: "2023-08-13", emotion: 5 },
        { date: "2023-08-14", emotion: 3 },
        { date: "2023-08-15", emotion: 6 },
        { date: "2023-08-16", emotion: 0 },
        { date: "2023-08-17", emotion: 1 },
    ];

    const emotionFromValue = (value) => {
        const emotionsMap = {
            0: "Depressed",
            1: "Stressed",
            2: "Anxious",
            3: "Angry",
            4: "Sad",
            5: "Happy",
            6: "Excited",
        };
        return emotionsMap[value];
    }

    const calculateEmotionFrequencies = (data) => {
        const frequencies = data.reduce((acc, datum) => {
            const emotion = emotionFromValue(datum.emotion);
            if (acc[emotion]) {
                acc[emotion]++;
            } else {
                acc[emotion] = 1;
            }
            return acc;
        }, {});

        return Object.entries(frequencies).map(([emotion, count]) => ({
            x: emotion,
            y: count
        }));
    };

    const graphData = data.map(datum => ({
        ...datum,
        emotionName: emotionFromValue(datum.emotion)
    }));

    const pieData = calculateEmotionFrequencies(data);

    const pieColors = pieData.map(datum => EMOTION_COLORS[datum.x]);

    // make the pi chart calculate the size of each emotion
    const totalEmotions = pieData.reduce((acc, datum) => acc + datum.y, 0);
    const pieDataWithPercentages = pieData.map(datum => ({
        ...datum,
        percentage: (datum.y / totalEmotions) * 100
    }));



    const CustomLabel = ({ x, y, datum, textAnchor, ...props }) => {
        const isSmallSegment = datum.percentage < 5;  // Threshold for determining small segments
        const midAngle = (datum.startAngle + datum.endAngle) / 2;

        if (isSmallSegment) {
            // Convert the midpoint angle to radians
            const radianMidAngle = (midAngle * Math.PI) / 180;

            // Adjust these multipliers to position the labels and lines
            const endX = x + Math.cos(radianMidAngle) * 100;
            const endY = y + Math.sin(radianMidAngle) * 100;

            return (
                <>
                    <Line x1={x} y1={y} x2={endX} y2={endY} stroke="#000" />
                    <VictoryLabel x={endX} y={endY} textAnchor={textAnchor} {...props} />
                </>
            );
        }
        // Default behavior for larger segments
        return <VictoryLabel x={x} y={y} textAnchor={textAnchor} {...props} angle={-32} />;
    };

    const therapists = [
        {
            name: "Dr. Amina Okoye",
            title: "Clinical Psychologist",
            email: "amina.okoye@example.com",
            website: "https://amina-therapy.com"
        },
        {
            name: "Dr. Kwame Nkrumah",
            title: "Psychotherapist",
            email: "kwame.nkrumah@example.com",
            website: "https://kwame-therapy.com"
        },
        {
            name: "Dr. Fatima Bello",
            title: "Counseling Psychologist",
            email: "fatima.bello@example.com",
            website: "https://fatima-therapy.com"
        },
        {
            name: "Dr. Samuel Afolabi",
            title: "Mental Health Counselor",
            email: "samuel.afolabi@example.com",
            website: "https://samuel-therapy.com"
        },
        {
            name: "Dr. Zainab Musa",
            title: "Behavioral Therapist",
            email: "zainab.musa@example.com",
            website: "https://zainab-therapy.com"
        }
    ];


    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >


                <View style={styles.container}>
                    <Image
                        style={styles.profileImage}
                        resizeMode="cover"
                        source={require("../../assets/ellipse-2.png")} // Using 'require' for local images.
                    />
                    <Text style={styles.username}>Walter Angoye</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionsText}>Emotions Calendar</Text>
                    <Text style={styles.email}>The calender info is gotten from "How are you feeling?"</Text>
                    <Calendar
                        markedDates={markedDates}
                    />
                    <View style={styles.legendContainer}>
                        {Object.entries(EMOTION_COLORS).map(([emotion, color]) => (
                            <RenderColorLegend key={emotion} emotion={emotion} color={color} />
                        ))}
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionsText}>Emotions Charts</Text>
                    <Text style={styles.email}>The Charts info are gotten from your journal entries</Text>
                    <Text></Text>
                    <Text style={styles.legendText}>Emotions Graph</Text>
                    <ScrollView horizontal={true} >
                        <VictoryChart
                            theme={VictoryTheme.material}
                            padding={{ left: 100, top: 30, right: 10, bottom: 30 }}
                            style={{
                                parent: {
                                    backgroundColor: "linen"
                                }
                            }}
                            marginRight={100}
                        >
                            <VictoryAxis
                                dependentAxis
                                tickValues={["Depressed", "Stressed", "Anxious", "Angry", "Sad", "Happy", "Excited"]}
                                style={{
                                    ticks: { stroke: "grey", size: 5 },
                                    tickLabels: { fontSize: 15, padding: 5, textAnchor: "end", dx: -10 }
                                }}
                            />
                            <VictoryAxis
                                tickFormat={[]} // This will hide the x-axis values
                                style={{
                                    ticks: { stroke: "grey", size: 5 },
                                    tickLabels: { fontSize: 12, padding: 5 }
                                }}
                            />
                            <VictoryLine
                                data={graphData}
                                x="date"
                                y="emotionName"
                                style={{
                                    data: { stroke: "chocolate" },
                                }}
                            />
                            <VictoryScatter
                                data={graphData}
                                x="date"
                                y="emotionName"
                                size={5}
                                style={{
                                    data: { fill: Color.dimgray_200 }
                                }}
                            />
                        </VictoryChart>
                    </ScrollView>
                </View>

                <View style={styles.section}>
                    <Text style={styles.legendText}>Emotions Distribution</Text>
                    <ScrollView horizontal={true} >
                        <VictoryPie
                            data={pieDataWithPercentages}
                            colorScale={pieColors}
                            x="x"
                            y="y"
                            labels={({ datum }) => `${datum.x} (${datum.percentage.toFixed(1)}%)`}
                            labelRadius={({ innerRadius }) => innerRadius + 80}  // Adjust this to position the labels on top of the segments
                            labelComponent={<CustomLabel />}
                            innerRadius={0}
                            padding={{ top: 20, bottom: 20, }}
                            style={{ labels: { fontSize: 12, fill: "#333", fontWeight: 500 } }}
                            radius={160}
                        />
                    </ScrollView>

                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionsText}>Stats</Text>
                    <Text></Text>
                    <Text style={styles.legendText}>Most Common Emotion: Happy</Text>
                    <Text style={styles.legendText}>Days Journaling: 17</Text>
                    <Text style={styles.legendText}>Streak: 17 days</Text>
                </View>

                <View style={styles.supportSection}>
                    <Text style={styles.sectionsText}>Support Resources</Text>
                    <Text style={styles.legendText}>Based on the emotional trend you have displayed, here are some recommended professionals you can reach out to (remote):</Text>

                    {therapists.map((therapist, index) => (
                        <View key={index} style={styles.therapistContainer}>
                            <Text style={styles.therapistName}>{therapist.name}</Text>
                            <Text style={styles.therapistTitle}>{therapist.title}</Text>
                            <Text style={styles.therapistEmail}>{therapist.email}</Text>
                            <Text style={styles.therapistWebsite}>{therapist.website}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.actionSection}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="settings-outline" size={24} color="#FE8235" />
                        <Text style={styles.actionText}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="create-outline" size={24} color="#FE8235" />
                        <Text style={styles.actionText}>Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Ionicons name="log-out-outline" size={24} color="#FE8235" />
                        <Text style={styles.actionText}>Logout</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    username: {
        fontSize: FontSize.size_lg,
        fontFamily: FontFamily.epilogueExtraBold,
        color: Color.dimgray_200,
    },
    therapistContainer: {
        marginTop: 10,
        paddingBottom: 10,
    },
    therapistName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.dimgray_200
    },
    therapistTitle: {
        fontSize: 14,
        color: 'gray'
    },
    therapistEmail: {
        fontSize: 14,
        color: 'chocolate'
    },
    therapistWebsite: {
        fontSize: 14,
        color: 'chocolate'
    },
    sectionsText: {
        fontSize: FontSize.size_lg,
        fontFamily: FontFamily.epilogueExtraBold,
        color: Color.dimgray_200,
        textAlign: "center",
    },
    section: {
        paddingBottom: 30,
        paddingTop: 30,
    },
    profileSection: {
        alignItems: 'center',
        marginVertical: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    legendText: {
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.rubikRegular,
        color: Color.dimgray_200,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        marginRight: 10
    },
    legendContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    email: {
        fontSize: FontSize.size_md,
        fontFamily: FontFamily.rubikRegular,
        color: Color.dimgray_200,
    },
    container: {
        flex: 1,
        backgroundColor: '#fbfbfb',
        padding: 16,
    },
    colorBox: {
        width: 20,
        height: 20,
        borderRadius: 5,
        marginRight: 5
    },
    bio: {
        paddingTop: 16,
        fontSize: FontSize.size_lg,
        fontFamily: FontFamily.rubikRegular,
        color: Color.dimgray_200,
    },
    actionSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionText: {
        marginLeft: 8,
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.rubikRegular,
        color: Color.dimgray_200,
    },
});

export default Profile;
