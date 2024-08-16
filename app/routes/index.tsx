import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Initial from "../screens/Initial";
import ProductScanning from "../screens/ProductScan";
import ProductAttribs from "../screens/ProductAttribs";
import SucessRegister from "../screens/SucessRegister";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="ProductScanning" component={ProductScanning} />
      <Stack.Screen name="ProductAttribs" component={ProductAttribs} />
      <Stack.Screen name="SucessRegister" component={SucessRegister} />
    </Stack.Navigator>
  );
};

export default Routes;
