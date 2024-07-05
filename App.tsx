import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Background } from './src/components/background'
import { Header } from './src/components/header'
import { useState } from 'react';

export default function App() {
  const [page, setpage] = useState(1)
  return (
      <Background>
        <Header/>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
