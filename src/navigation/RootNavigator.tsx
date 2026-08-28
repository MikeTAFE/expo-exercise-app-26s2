import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import NotFoundScreen from "../screens/NotFoundScreen";


const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="NotFound"
                component={NotFoundScreen}
                options={{
                    title: "404 Page not found"
                }}
            />
        </Stack.Navigator>
    );
}