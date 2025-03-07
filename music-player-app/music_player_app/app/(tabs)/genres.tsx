import { View, Text, StyleSheet } from "react-native";

const GenresScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Genres Tab!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default GenresScreen;
