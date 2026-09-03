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
                // tabBarStyle: styles the outer bar container
                tabBarStyle: {
                    backgroundColor: "#fff",
                    height: 60, // Safe height (esp. for web)
                    borderTopWidth: 1,
                    borderTopColor: theme.colors.outlineVariant,
                },
                // tabBarItemStyle: styles each tab item
                tabBarItemStyle: {
                    paddingVertical: 2,
                    // borderWidth: 1,
                },
                // tabBarLabelStyle: styles the label text
                tabBarLabelStyle: {
                    ...theme.fonts.labelSmall, // Use Paper typography styles
                    fontSize: 12,
                    lineHeight: 14, // Prevent text clipping (esp. for web)
                    marginTop: 2,
                    marginBottom: 0,
                },
                // tabBarIconStyle: styles the icon wrapper
                tabBarIconStyle: {},

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
                        ...tab.options,  // Merge custom options
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