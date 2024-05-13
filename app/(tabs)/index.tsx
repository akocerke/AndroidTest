// index.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/partial-react-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Willkommen!</Text>
      <Text style={styles.subtitle}>Starte dein Cross-Platform Abenteuer</Text>
      <Text style={styles.instructions}>Um loszulegen, füge einen eigenen Tab hinzu und gestalte ihn nach deinen Wünschen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 250,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
