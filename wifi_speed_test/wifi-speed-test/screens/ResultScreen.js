import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultScreen = ({ route }) => {
  const { speed } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Download Speed: {speed} Mbps</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  resultText: { fontSize: 20, fontWeight: 'bold' },
});

export default ResultScreen;
