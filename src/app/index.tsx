import HomeHeader from "@/components/HomeHeader";
import { ScrollView, StyleSheet, Text } from "react-native";
import { globalStyles } from "../styles/global";
export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader />
    </ScrollView>
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
