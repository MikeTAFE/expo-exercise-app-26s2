import Exercise1Screen from "../screens/Exercise1Screen";
import Exercise2Screen from "../screens/Exercise2Screen";

// Bottom tabs for navigation
//   name: internal route name
//   title: display name
//   icon: icon name
//   component: screen/component
export const tabs = [
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
        label: "Ex 02",
        icon: "numeric-2-circle",
        component: Exercise2Screen,
    },
];