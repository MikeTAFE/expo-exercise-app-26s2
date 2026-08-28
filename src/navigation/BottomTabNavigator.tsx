import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tabs } from "./tabConfig";
import { Icon } from "react-native-paper";
import theme from "../theme/theme";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                // Show/hide header (title bar)
                headerShown: true,

                // Styling
                headerStyle: {
                    backgroundColor: theme.colors.primary,
                },
                tabBarStyle: {
                    backgroundColor: "#fff",
                },
                headerTintColor: theme.colors.onPrimary,
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.outline,
            }}
        >
            {/* Loop through the tabs defined in tabConfig.ts */}
            {tabs.map(tab => (
                <Tab.Screen
                    key={tab.name}
                    name={tab.name}
                    component={tab.component}
                    options={{
                        title: tab.title,
                        tabBarLabel: tab.label ?? tab.title,
                        tabBarIcon: ({ color, size }) => (
                            <Icon source={tab.icon} size={size} color={color} />
                        ),
                    }}
                />
            ))}

            {/* <Tab.Screen name="Exercise1" component={Exercise1Screen} />
            <Tab.Screen name="Exercise2" component={Exercise2Screen} /> */}
        </Tab.Navigator>
    );
}