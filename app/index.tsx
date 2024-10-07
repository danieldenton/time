import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [apiResponse, setApiResponse] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000)); 
      setApiResponse({ message: 'User was successfully created' });
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mock API Form Submission</Text>
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
      {loading && <Text>Loading...</Text>}
      {apiResponse && (
        <View style={styles.responseContainer}>
          <Text>Response:</Text>
          <Text>{JSON.stringify(apiResponse)}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
  },
  responseContainer: {
    marginTop: 20,
  },
});
