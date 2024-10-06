import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import { View, Text } from "@/components/Themed";

export default function Timer() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timer</Text>
      <Link style={styles.link} href="/">
        home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
});
