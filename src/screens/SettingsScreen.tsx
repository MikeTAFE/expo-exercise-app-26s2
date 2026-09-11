import { Appbar, Avatar, Button, Card, Switch, Text } from "react-native-paper";
import ScreenContainer from "../components/ScreenContainer";
import { ScrollView, StyleSheet, View } from "react-native";
import { useTheme } from "../context/ThemeContext";

export default function SettingsScreen() {

    const { overrideTheme, setOverrideTheme } = useTheme();

    const isDark = (overrideTheme === "dark");

    const toggleOverrideTheme = () => {
        setOverrideTheme(isDark ? "light" : "dark")
    }

    return (
        <ScreenContainer>
            <ScrollView style={styles.content}>
                <Card>
                    <Card.Title title="Appearance" />
                    <Card.Content>
                        <View style={styles.formRow}>
                            <Text>Dark Mode</Text>
                            <Switch value={isDark} onValueChange={toggleOverrideTheme} />
                        </View>
                    </Card.Content>
                </Card>
            </ScrollView>
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    content: {
        padding: 2,
    },
    formRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
});