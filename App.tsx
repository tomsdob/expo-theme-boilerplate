import React from "react";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@shopify/restyle";
// Components
import Navigation from "./components/Navigation";
// Theme
import { theme, darkTheme } from "./themes/Theme";

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <AppearanceProvider>
      <StatusBar style={colorScheme === "light" ? "dark" : "light"} />
      <ThemeProvider theme={colorScheme === "light" ? theme : darkTheme}>
        <Navigation theme={colorScheme} />
      </ThemeProvider>
    </AppearanceProvider>
  );
}
