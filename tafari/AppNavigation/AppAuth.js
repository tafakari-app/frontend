import React from 'react'
import Login from '../screens/LoginScreens/Login'
import Register from '../screens/LoginScreens/Register'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screens/LoginScreens/Splash'
const Stack = createNativeStackNavigator()
import { useFonts } from "expo-font";


const AppAuthScreens = () => {
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
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
          presentation: "fullScreenModal",
          animation: "default"

        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          presentation: "fullScreenModal",
          animation: "default"

        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          presentation: "fullScreenModal",
          animation: "default"
        }}
      />
    </Stack.Navigator>
  )
}

export default AppAuthScreens
