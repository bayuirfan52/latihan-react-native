import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator  } from "@react-navigation/native-stack";
import React from "react";
import MainView from "./lib/view/MainView";
import LoginView from "./lib/view/LoginView";
import { AppRoute } from "./lib/route/AppRoute";

const Stack = createNativeStackNavigator<AppRoute>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name='home' component={MainView} options={{headerShown: false, title: ''}} />
        <Stack.Screen name='login' component={LoginView} options={{headerShown: false, title: ''}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;