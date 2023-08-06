import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const Splash = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('Login')
    navigation.push('Login')
  }
  const handleRegister = () => {
    navigation.push('Register')
  }


  return (
    <View className="flex flex-1 bg-[#FE8235]">
      <StatusBar hidden />
      <View className="mx-3 items-center justify-center bg-[#fffee8] h-[50%] mt-3 rounded-3xl">
        <Image
          source={require('../../assets/icons/care.jpg')}
          style={{ width: 300, height: 300 }}
        />
      </View>

      <View className="mt-20 mx-4">
        <Text style={styles.splashText} className="text-center">
          Welcome to  {"\n"}
          Tafari
        </Text>

        <Text className="text-center mx-10 mt-5 text-base text-[#DFE0DF]" >
          Discover Your Inner Strength, Embrace Your Journey to Wellness.
        </Text>
      </View>

      <View className="flex flex-row  bg-[#e8e6ef] mx-16 justify-center overflow-hidden mt-16 rounded-xl">
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
          className="bg-[#ffffff] w-full rounded-xl"
        >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="  w-full rounded-xl"
          style={styles.button}
          onPress={handleRegister}
        >
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>


      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: -50,
    marginTop: -50,
    backgroundColor: '#e8ecf5',
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE8235',
  },
  splashText: {
    // Your text styles here
    fontSize: 30,
    color: '#650000',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    color: '#3d384e',
    fontWeight: 'bold',
  },
});

export default Splash;
