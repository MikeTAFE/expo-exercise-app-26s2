import Exercise1Screen from "../screens/Exercise1Screen";
import Exercise2Screen from "../screens/Exercise2Screen";
import HomeScreen from "../screens/HomeScreen";
import ExerciseNavigator from "./ExerciseNavigator";

/**
 * Configuration for a bottom navigation tab.
 */
interface Tab {
    /** Internal route name used for navigation. */
    name: string;

    /** Display title for the screen. */
    title: string;

    /** Short display label shown in the tab bar. */
    label?: string;

    /** Material Design icon name. */
    icon: string;

    /** React component rendered for the tab. */
    component: React.ComponentType<any>;
}

// Bottom tabs for navigation
export const tabs: Tab[] = [
    {
        name: "Home",
        label: "Home",
        title: "Home",
        icon: "home",
        component: HomeScreen,
    },
    {
        name: "Exercises",
        label: "Exercises",
        title: "Exercises",
        icon: "book-open-page-variant-outline",
        component: ExerciseNavigator,
    },
    {
        name: "Exercise1",
        label: "Ex 01",
        title: "Exercise 01",
        icon: "numeric-1-circle",
        component: Exercise1Screen,
    },
    {
        name: "Exercise2",
        title: "Exercise 02",
        // label: "Ex 02",
        icon: "numeric-2-circle",
        component: Exercise2Screen,
    },
];