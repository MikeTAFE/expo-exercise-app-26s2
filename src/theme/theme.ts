import { MD3LightTheme } from "react-native-paper";

const theme = {
    // Start with MD3 theme defaults
    ...MD3LightTheme,

    // Override specific property values
    colors: {
        // Use existing colours as defined
        ...MD3LightTheme.colors,
        
        // Override specific colours
        primary: "#00aced",
        secondary: "#f78d0b",
        onSurface: "#333",
    }
};

export default theme;