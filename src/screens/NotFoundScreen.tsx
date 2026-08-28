import { Button, Text } from "react-native-paper";
import ScreenContainer from "../components/ScreenContainer";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NotFoundScreenProps = {
    navigation: NativeStackNavigationProp<any>
};

export default function NotFoundScreen({ navigation }: NotFoundScreenProps) {
    return (
        <ScreenContainer>
            <Text variant="headlineMedium">404 Page not found</Text>
            <Button
                mode="contained"
                onPress={() => navigation.navigate("Root", {screen: "Exercise2"})}
            >
                Go to Exercise 2
            </Button>
        </ScreenContainer>
    );
}