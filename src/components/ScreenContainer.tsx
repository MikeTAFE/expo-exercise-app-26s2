import { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type ScreenContainerProps = {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};

export default function ScreenContainer({ children, style }: ScreenContainerProps) {
    return (
        <View style={[styles.container, style]}>
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
