import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppRoute } from "./AppRoute";
import MainView from "../view/MainView";
import LoginView from "../view/LoginView";

const Stack = createNativeStackNavigator<AppRoute>();

export const AppNavigator = () => (<NavigationContainer>
    <Stack.Navigator initialRouteName="login">
        <Stack.Screen name='home' component={MainView} options={{ headerShown: false, title: '' }} />
        <Stack.Screen name='login' component={LoginView} options={{ headerShown: false, title: '' }} />
    </Stack.Navigator>
</NavigationContainer>);