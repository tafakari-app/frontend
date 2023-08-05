import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const Splash = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.content}>
        <Text style={styles.splashText}>tafakari</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:-50,
    marginTop:-50,
    backgroundColor: '#FE8235',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE8235',
  },
  splashText: {
    // Your text styles here
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Splash;
