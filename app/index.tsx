import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [apiResponse, setApiResponse] = useState<any | null>(null);

  const handleSubmit = async () => {
    try {
      // const response = await fetch('');
      // const data = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const resp = { message: "User was successfully created" };
      setApiResponse(resp.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mock</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
      />
      <Button title="Submit" onPress={handleSubmit} />

      {apiResponse && (
        <View style={styles.responseContainer}>
          <Text>Response:</Text>
          <Text>{apiResponse}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
  },
  responseContainer: {
    marginTop: 20,
  },
});
