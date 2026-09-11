import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { linking } from './src/navigation/linkingConfig';
import RootNavigator from './src/navigation/RootNavigator';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';

function AppContent() {

  // Use the theme context defined by the ThemeProvider
  const {theme} = useTheme();

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer linking={linking}>
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
