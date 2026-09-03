import { LinkingOptions } from "@react-navigation/native";

// Linking config: https://reactnavigation.org/docs/configuring-links
export const linking: LinkingOptions<ReactNavigation.RootParamList> = {
    prefixes: [
        "exapp://",
        "https://exapp.com",
    ],
    config: {
        // Root navigator (stack)
        screens: {
            Root: {
                // Bottom tab nav (tabs)
                screens: {
                    Exercises: {
                        // Exercise nav (stack)
                        path: "exercises",
                        screens: {
                            ExerciseList: "",
                            Exercise1: "01",
                            Exercise2: "02",
                        }
                    },
                    Exercise1: "exercise-1",
                    Exercise2: "exercise-2",
                },
            },
            NotFound: "*",  // Catch-all route (404)
        },
    }
}