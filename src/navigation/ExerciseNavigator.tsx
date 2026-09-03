import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExerciseListScreen from "../screens/ExerciseListScreen";
import Exercise1Screen from "../screens/Exercise1Screen";
import Exercise2Screen from "../screens/Exercise2Screen";
import theme from "../theme/theme";


const Stack = createNativeStackNavigator();

export default function ExerciseNavigator() {
    return (
        <Stack.Navigator>
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
        </Stack.Navigator>
    );
}