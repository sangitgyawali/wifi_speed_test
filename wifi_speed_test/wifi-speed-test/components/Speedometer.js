// src/components/Speedometer.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface SpeedometerProps {
  speed: number;
}

const Speedometer: React.FC<SpeedometerProps> = ({ speed }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (speed / 100) * circumference;

  return (
    <View style={styles.container}>
      <Svg height="120" width="120">
        <Circle
          cx="60"
          cy="60"
          r={radius}
          stroke="grey"
          strokeWidth="10"
          fill="none"
        />
        <Circle
          cx="60"
          cy="60"
          r={radius}
          stroke="green"
          strokeWidth="10"
          strokeDasharray={`${circumference}`}
          strokeDashoffset={strokeDashoffset}
          fill="none"
        />
      </Svg>
      <Text style={styles.speedText}>{speed} Mbps</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  speedText: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Speedometer;
