import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { Svg, Circle, G } from 'react-native-svg';

const HomeScreen = () => {
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);
  const [ping, setPing] = useState(0);
  const [isTesting, setIsTesting] = useState(false);

  // Download speed test without API
  const testDownloadSpeed = async () => {
    const fileSize = 5 * 1024 * 1024; // 5MB file
    const startTime = Date.now();

    try {
      // Replace with your test file URL
      const response = await fetch('https://speed.hetzner.de/100MB.bin');
      const blob = await response.blob();
      const downloadTime = (Date.now() - startTime) / 1000; // in seconds
      const speed = (fileSize / downloadTime) / 1024 / 1024; // speed in Mbps
      setDownloadSpeed(speed.toFixed(2));
    } catch (error) {
      console.error('Download test failed:', error);
      alert('Error testing download speed');
    }
  };

  // Upload speed test without API
  const testUploadSpeed = async () => {
    const fileSize = 5 * 1024 * 1024; // 5MB file
    const startTime = Date.now();
    const dummyFile = new Blob([new ArrayBuffer(fileSize)]); // Create a dummy file

    try {
      // Replace with your server upload URL
      const formData = new FormData();
      formData.append('file', dummyFile, 'testfile.jpg');
      
      const response = await fetch('https://example.com/upload', {
        method: 'POST',
        body: formData,
      });
      const uploadTime = (Date.now() - startTime) / 1000; // in seconds
      const speed = (fileSize / uploadTime) / 1024 / 1024; // speed in Mbps
      setUploadSpeed(speed.toFixed(2));
    } catch (error) {
      console.error('Upload test failed:', error);
      alert('Error testing upload speed');
    }
  };

  // Mocking ping for simplicity, normally you would need a native module
  const testPing = () => {
    // Here you would ideally use a native module to ping an external server
    // For now, it's mocked with a random value
    const mockPing = Math.floor(Math.random() * 100);
    setPing(mockPing);
  };

  const startSpeedTest = async () => {
    setIsTesting(true);
    await testDownloadSpeed();
    await testUploadSpeed();
    testPing();
    setIsTesting(false);
  };

  // Draw a speedometer using SVG
  const renderSpeedometer = (speed) => {
    const radius = 50;
    const strokeWidth = 10;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (speed / 100) * circumference;

    return (
      <Svg height="120" width="120">
        <G rotation="-90" origin="60,60">
          <Circle
            cx="60"
            cy="60"
            r={radius}
            stroke="lightgray"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <Circle
            cx="60"
            cy="60"
            r={radius}
            stroke="green"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            fill="none"
          />
        </G>
      </Svg>
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.ibb.co/Kbryhfd/speed.png' }}
        style={styles.image}
      />
      <Text style={styles.title}>Wifi Speed Test App</Text>

      <Button title="Start Speed Test" onPress={startSpeedTest} disabled={isTesting} />
      {isTesting && <Text style={styles.testingText}>Testing...</Text>}

      {/* Render Speedometer */}
      {downloadSpeed && renderSpeedometer(downloadSpeed)}

      {/* Display Results after Speed Test */}
      {!isTesting && downloadSpeed !== 0 && uploadSpeed !== 0 && ping !== 0 && (
        <View>
          <Text style={styles.resultText}>Download Speed: {downloadSpeed} Mbps</Text>
          <Text style={styles.resultText}>Upload Speed: {uploadSpeed} Mbps</Text>
          <Text style={styles.resultText}>Ping: {ping} ms</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  image: {
    height: 150,
    width: 150,
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  testingText: {
    fontSize: 16,
    color: 'gray',
  },
  resultText: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
