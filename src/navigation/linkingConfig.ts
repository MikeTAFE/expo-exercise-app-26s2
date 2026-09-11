import { LinkingOptions } from "@react-navigation/native";

// Linking config: https://reactnavigation.org/docs/configuring-links
export const linking: LinkingOptions<ReactNavigation.RootParamList> = {
    prefixes: [
        "exapp://",
        "https://exapp.com",
    ],
    config: {
        // Root navigator (stack)
        path: "/",
        screens: {
            Root: {
                // Bottom tab nav (tabs)
                screens: {
                    Home: "home",
                    Exercises: {
                        // Exercise nav (stack)
                        path: "exercises",
                        screens: {
                            ExerciseList: "", // URL: /exercises/
                            Exercise1: "01",  // URL: /exercises/01
                            Exercise2: "02",  // URL: /exercises/02
                        }
                    },
                    // Exercise1: "exercise-1",
                    // Exercise2: "exercise-2",
                    Settings: "settings",
                },
            },
            NotFound: "*",  // Catch-all route (404)
        },
    }
}