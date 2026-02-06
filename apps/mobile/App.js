import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏛️ iREDQueen</Text>
      <Text style={styles.subtitle}>Sovereign Finance System</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    color: "#00ff88",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    color: "#ffffff",
    marginTop: 10,
  },
});
