import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Initial from "../screens/Initial";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Initial" component={Initial} />
    </Stack.Navigator>
  );
};

export default Routes;
