import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";


export default function ScreenContainer({ children }: PropsWithChildren) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})

{/*

<ScreenContainer>
    <Text>Screen content goes here...</Text>
</ScreenContainer>

*/}
