import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SpeedTestScreen = () => {
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);
  const [ping, setPing] = useState(0);

  const testSpeed = async () => {
    try {
      // Testing Download Speed
      const downloadResponse = await fetch('https://librespeed.org/api/v1/test?type=download');
      const downloadData = await downloadResponse.json();
      const downloadMbps = (downloadData.speed / 1_000_000).toFixed(2); // Convert to Mbps
      setDownloadSpeed(downloadMbps);

      // Testing Upload Speed
      const uploadResponse = await fetch('https://librespeed.org/api/v1/test?type=upload');
      const uploadData = await uploadResponse.json();
      const uploadMbps = (uploadData.speed / 1_000_000).toFixed(2); // Convert to Mbps
      setUploadSpeed(uploadMbps);

      // Testing Ping
      const pingResponse = await fetch('https://librespeed.org/api/v1/test?type=ping');
      const pingData = await pingResponse.json();
      setPing(pingData.ping);
    } catch (error) {
      console.error('Error testing speed:', error);
      alert('Error testing speed. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Speed Test</Text>
      <Button title="Test Speed" onPress={testSpeed} />
      <Text style={styles.resultText}>Download Speed: {downloadSpeed} Mbps</Text>
      <Text style={styles.resultText}>Upload Speed: {uploadSpeed} Mbps</Text>
      <Text style={styles.resultText}>Ping: {ping} ms</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default SpeedTestScreen;
