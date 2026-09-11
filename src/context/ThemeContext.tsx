import { createContext, PropsWithChildren, useContext, useMemo, useState } from "react";
import { useColorScheme } from "react-native";
import { combinedLightTheme, combinedDarkTheme } from "../theme/theme";

type ThemeContextType = {
    theme: typeof combinedLightTheme,
    overrideTheme: string | null,
    setOverrideTheme: React.Dispatch<React.SetStateAction<string | null>>
}

// Create a React Context for current theme
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme Context Provider (makes data available to all descendant components/elements)
export function ThemeProvider({ children }: PropsWithChildren) {

    // Get system colour scheme
    const systemTheme = useColorScheme();

    // Allow overriding theme
    const [overrideTheme, setOverrideTheme] = useState<string | null>(null);

    // Determine theme to use
    const theme = useMemo(() => {

        // Check theme overrides
        if (overrideTheme === "light") return combinedLightTheme;
        if (overrideTheme === "dark") return combinedDarkTheme;

        // Check system theme
        if (systemTheme === "dark") return combinedDarkTheme;

        // Light theme by default
        return combinedLightTheme;

    }, [systemTheme, overrideTheme]);

    return (
        <ThemeContext.Provider value={{theme, overrideTheme, setOverrideTheme}}>
            {children}
        </ThemeContext.Provider>
    );

}

// Custom hook to use the theme context (avoid duplicate imports)
// A "custom hook" is simply a function that uses React hooks internally
export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext);
    
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
}