// src/screens/TestSpeedScreen.tsx
import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Speedometer from '../components/Speedometer'; // Import the Speedometer component
import { getSpeed } from '../utils/speedTestAPI'; // Import the API utility function

const TestSpeedScreen = () => {
  const [speed, setSpeed] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const checkSpeed = async () => {
    setLoading(true);
    try {
      const speedData = await getSpeed();
      setSpeed(speedData);
    } catch (error) {
      console.error(error);
      alert('Error fetching speed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Testing Your Speed</Text>
      <Speedometer speed={speed} />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Test Speed" onPress={checkSpeed} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default TestSpeedScreen;
