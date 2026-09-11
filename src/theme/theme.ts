import {
    DefaultTheme as NavLightTheme,
    DarkTheme as NavDarkTheme
} from "@react-navigation/native";
import { MD3LightTheme, MD3DarkTheme, MD3Theme } from "react-native-paper";
import { DeepPartial } from "../types/utility";

function combineThemes(paperTheme: MD3Theme, navigationTheme: ReactNavigation.Theme, overrides?: DeepPartial<MD3Theme>) {
    return {

        // Pull in nav styles
        ...navigationTheme,

        // Pull in Paper styles
        ...paperTheme,

        // Pull in overrides
        ...overrides,

        // Merge colours
        colors: {
            // Use existing colours as defined
            ...navigationTheme.colors,
            ...paperTheme.colors,
            
            // Override specific colours
            primary: "#00aced",
            onPrimary: "#fff",
            secondary: "#f78d0b",
            onSecondary: "#fff",
            // onSurface: "#333",

            // Pull in override colours
            ...overrides?.colors,

            // Map navigation semantics/names to MD3 names
            card: paperTheme.colors.surface,
            text: paperTheme.colors.onSurface,
            border: paperTheme.colors.outline,
            notification: paperTheme.colors.secondary,
        }
    };
}

const lightOverrides: DeepPartial<MD3Theme> = {
    colors: {
        surface: "#eee",
        onSurface: "#333",
    }
};

const darkOverrides: DeepPartial<MD3Theme> = {
    colors: {
        surface: "#333",
        onSurface: "#f00",
    }
};

export const combinedLightTheme = combineThemes(MD3LightTheme, NavLightTheme, lightOverrides);
export const combinedDarkTheme = combineThemes(MD3DarkTheme, NavDarkTheme, darkOverrides);