import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExerciseListScreen from "../screens/ExerciseListScreen";
import Exercise1Screen from "../screens/Exercise1Screen";
import Exercise2Screen from "../screens/Exercise2Screen";
import { useTheme } from "../context/ThemeContext";
import Exercise5Screen from "../screens/Exercise5Screen";

const Stack = createNativeStackNavigator();

export default function ExerciseNavigator() {

    // Use theme context
    const {theme} = useTheme();

    return (
        <Stack.Navigator 
            initialRouteName="ExerciseList"  // Route to render by default
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: theme.colors.secondary,
                    
                    // "height" is not officially supported, esp. on iOS and Android
                    // @ts-expect-error
                    height: 40,
                },
                headerTitleStyle: {
                    ...theme.fonts.titleMedium,
                    // color: theme.colors.onSecondary,
                },
                headerTintColor: theme.colors.onSecondary,
                contentStyle: {
                    backgroundColor: theme.colors.background,
                }
            }}
        >
            <Stack.Screen
                name="ExerciseList"
                component={ExerciseListScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Exercise1"
                component={Exercise1Screen}
                options={{
                    title: "Exercise 01: Greeting"
                }}
            />
            <Stack.Screen 
                name="Exercise2"
                component={Exercise2Screen}
                options={{
                    title: "Exercise 02: Counter"
                }}
            />
            <Stack.Screen 
                name="Exercise5"
                component={Exercise5Screen}
                options={{
                    title: "Exercise 05: Users via API"
                }}
            />
        </Stack.Navigator>
    );
}