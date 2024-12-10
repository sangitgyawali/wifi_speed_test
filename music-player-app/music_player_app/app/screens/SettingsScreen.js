import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
          <Text>Welcome to the Settings Screen!</Text>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    });
    
export default SettingsScreen