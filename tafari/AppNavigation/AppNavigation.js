import AppBottomTabs from './AppBottomTabs';
import * as React from "react";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    const [fontsLoaded, error] = useFonts({
        "Epilogue-Regular": require("../assets/fonts/Epilogue-Regular.ttf"),
        "Epilogue-Medium": require("../assets/fonts/Epilogue-Medium.ttf"),
        "Epilogue-SemiBold": require("../assets/fonts/Epilogue-SemiBold.ttf"),
        "Epilogue-Bold": require("../assets/fonts/Epilogue-Bold.ttf"),
        "Epilogue-ExtraBold": require("../assets/fonts/Epilogue-ExtraBold.ttf"),
        "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
        "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    });

    if (!fontsLoaded && !error) {
        return null;
    }


    return (
        <Stack.Navigator>
            <Stack.Screen
                name="AppBottomTabs"
                component={AppBottomTabs}
                options={{
                    headerShown: false,
                    presentation: "fullScreenModal",
                    animation: "default"
                }}
            />
        </Stack.Navigator>
    );
};


export default AppNavigation
