import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hey bud</Text>
      <Link style={styles.link} href="/timer">Timer</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    color: 'white'
  }
});
