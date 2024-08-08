import { useState } from 'react';
import { AuthProvider } from './src/context/auth';
import { Navigation } from './src/navigation';
import {  useFonts, Inter_500Medium } from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
      <AuthProvider>
        <Navigation/>
      </AuthProvider>
  );
}