const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Journal from "./screens/Journal";
import Community from "./screens/Community";
import Library from "./screens/Library";
import Splash from "./screens/Splash";
import HomeButtonActive from "./components/HomeButtonActive";
import HomeButton from "./components/HomeButton";
import LibraryButtonActive from "./components/LibraryButtonActive";
import LibraryButton from "./components/LibraryButton";
import JournalButtonActive from "./components/JournalButtonActive";
import JournalButton from "./components/JournalButton";
import CommunityButtonActive from "./components/CommunityButtonActive";
import CommunityButton from "./components/CommunityButton";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <HomeButton />,
    <LibraryButton />,
    <JournalButton />,
    <CommunityButton />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <HomeButtonActive />,
    <LibraryButtonActive />,
    <JournalButtonActive />,
    <CommunityButtonActive />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              width: 375,
              height: 93,
              flexDirection: "row",
              justifyContent: "space-around", // Added to space items evenly
              alignItems: "center", // Added to center items vertically
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Journal"
        component={Journal}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    "Epilogue-Regular": require("./assets/fonts/Epilogue-Regular.ttf"),
    "Epilogue-Medium": require("./assets/fonts/Epilogue-Medium.ttf"),
    "Epilogue-SemiBold": require("./assets/fonts/Epilogue-SemiBold.ttf"),
    "Epilogue-Bold": require("./assets/fonts/Epilogue-Bold.ttf"),
    "Epilogue-ExtraBold": require("./assets/fonts/Epilogue-ExtraBold.ttf"),
    "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Medium": require("./assets/fonts/Rubik-Medium.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Splash />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
