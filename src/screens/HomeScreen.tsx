import { Appbar, Avatar, Button, Card, Text } from "react-native-paper";
import ScreenContainer from "../components/ScreenContainer";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet, View } from "react-native";

type HomeScreenProps = {
    navigation: NativeStackNavigationProp<any>
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <ScreenContainer>
            
            <Appbar.Header>
                <Appbar.Content title="Exercise App" />
                <Appbar.Action icon="bell-outline" onPress={() => {}} />
            </Appbar.Header>

            <ScrollView style={styles.content}>

                <View style={styles.welcome}>
                    <Avatar.Icon icon="run" size={100} />
                    <Text variant="headlineSmall" style={styles.title}>
                        A collection of exercises
                    </Text>
                    <Text variant="bodyMedium">
                        This is a collection of exercises testing out React Native in a structured project setting. This project uses React Navigation, React Native Paper (UI), and many other tools.
                    </Text>
                </View>

                <Card
                    style={styles.card}
                    onPress={() => navigation.navigate("Exercises", {screen: "ExerciseList"})}
                >
                    <Card.Title
                        title="Exercises"
                        subtitle="View the exercises"
                        left={(props) => <Avatar.Icon {...props} icon="run" />}
                    />
                </Card>

            </ScrollView>

        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    content: {
        marginTop: 10,
        padding: 2,
    },
    welcome: {
        alignItems: "center",
        gap: 20,
        marginBottom: 24,
    },
    title: {
        marginTop: 12,
        // color: "hotpink"
    },
    card: {
        // marginHorizontal: 2,
        marginBottom: 12,
    },
});