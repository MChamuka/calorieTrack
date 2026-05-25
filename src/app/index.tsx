import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../Styles/global";
export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <Text style={styles.date}>Monday, March 16</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
  },
  date: {
    fontSize: 14,
    color: "#a0a0b0",
    marginTop: 4,
    marginBottom: 30,
  },
});
