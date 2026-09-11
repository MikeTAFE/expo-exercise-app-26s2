import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { ActivityIndicator, Button, Card, Icon, IconButton, Text } from "react-native-paper";
import ScreenContainer from "../components/ScreenContainer";
import { useEffect, useLayoutEffect, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const API_URL = `https://jsonplaceholder.typicode.com/users`;

type ScreenProps = {
    navigation: NativeStackNavigationProp<any>
};

export default function Exercise5Screen({ navigation }: ScreenProps) {

    // This screen has 3 mutually-exclusive states: loading, error, data

    const [users, setUsers] = useState<string[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // Load users from API
    const loadUsers = async () => {
        try {

            // Reset the loading/error state
            setIsLoading(true);
            setErrorMessage(undefined);

            // EXAMPLE: non-async & await method to handle Promises
            // fetch(API_URL)
            //     .then(r => r.json())
            //     .then(d => console.log(d))
            //     .catch(e => console.warn(e))
            
            // Make a simple GET request
            const response = await fetch(API_URL);

            // Check if not OK response status (success = 200-299)
            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`)
            }

            // Convert JSON response
            const data = await response.json();

            // TESTING: dump user data in console
            // console.log({user_data: data});

            // Update state
            setUsers(data);

        } catch (error) {
            setErrorMessage("Unable to load users.");
            console.warn("Unable to load users:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Load users on startup/mount
    // useEffect() lifecycle: screen mounts -> useEffect runs -> fetchAPI -> setUsers(data) -> setIsLoading(false) -> screen re-renders
    useEffect(() => {
        loadUsers();
    }, []);

    // Add refresh button to header (insert into React Navigation header)
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton
                    icon="refresh"
                    iconColor="white"
                    onPress={loadUsers}
                    disabled={isLoading}
                />
            )
        })
    }, [navigation, isLoading])

    // Render each user
    const renderUser = ({ item, index }: ListRenderItemInfo<any>) => (
        <Card key={item.id} style={styles.userCard}>
            <Card.Content>
                <Text>{index + 1}. {item.name}</Text>
            </Card.Content>
        </Card>
    );

    // Loading state
    if (isLoading) {
        return (
            <ScreenContainer style={styles.centered}>
                <ActivityIndicator size="large" />
                <Text style={styles.loadingText}>Loading users...</Text>
            </ScreenContainer>
        );
    }

    // Error state
    if (errorMessage) {
        return (
            <ScreenContainer style={styles.centered}>
                <Card style={styles.errorCard}>
                    <Card.Content>
                        <View style={styles.errorTitle}>
                            <Icon size={30} source="alert-rhombus" color="red" />
                            <Text variant="headlineSmall" style={styles.errorTitleText}>Error</Text>
                        </View>
                        <Text style={styles.errorText}>{errorMessage}</Text>
                        <Button
                            mode="contained"
                            onPress={loadUsers}
                        >Retry</Button>
                    </Card.Content>
                </Card>
            </ScreenContainer>
        );
    }

    return (
        <ScreenContainer>
            <Text variant="titleMedium" style={styles.title}>Exercise 5: Users via API</Text>
            
            <FlatList
                data={users}
                renderItem={renderUser}
                // NOTE: pull-to-refresh will not work on web by default
                refreshing={isLoading}
                onRefresh={loadUsers}
                contentContainerStyle={styles.userList}
            />
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    centered: {
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        marginBottom: 10
    },
    loadingText: {
        marginTop: 10
    },
    userList: {
        gap: 5,
        marginTop: 10,
    },
    userCard: {
        margin: 2,
    },
    errorCard: {
        width: "100%",
        maxWidth: 400
    },
    errorTitle: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        marginBottom: 10
    },
    errorTitleText: {
        color: "red",
    },
    errorText: {
        // color: "red",
        fontSize: 16,
        marginBottom: 20
    },
    retryButton: {
        marginTop: 5
    }
})