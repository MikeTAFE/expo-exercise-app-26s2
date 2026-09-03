import { List, Text } from "react-native-paper";
import ScreenContainer from "../components/ScreenContainer";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ExerciseListScreenProps = {
    navigation: NativeStackNavigationProp<any>
};

export default function ExerciseListScreen({ navigation }: ExerciseListScreenProps) {

    const exercises = [
        {
            title: "Exercise 01: Greeting",
            description: "Display a simple greeting based on user name.",
            icon: "numeric-1-circle",
            route: "Exercise1",
        },
        {
            title: "Exercise 02: Counter",
            description: "Use state to maintain a counter.",
            icon: "numeric-2-circle",
            route: "Exercise2",
        },
    ];

    return (
        <ScreenContainer>

            <List.Section title="Exercises">
                {exercises.map((ex, index) => (
                    <List.Item
                        key={index}
                        title={ex.title}
                        description={ex.description}
                        left={props => <List.Icon {...props} icon={ex.icon} />}
                        onPress={() => navigation.navigate(ex.route)}
                    />
                ))}
            </List.Section>
        </ScreenContainer>
    );
}