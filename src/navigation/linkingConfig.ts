import { LinkingOptions } from "@react-navigation/native";

// Linking config: https://reactnavigation.org/docs/configuring-links
export const linking: LinkingOptions<ReactNavigation.RootParamList> = {
    prefixes: [
        "exapp://",
        "https://exapp.com",
    ],
    config: {
        screens: {
            Root: {
                screens: {
                    Exercise1: "exercise-1",
                    Exercise2: "exercise-2",
                },
            },
        },
    }
}