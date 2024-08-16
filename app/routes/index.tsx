import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Initial from "../screens/Initial";
import ProductScanning from "../screens/StorageRegister/ProductScan";
import ProductAttribs from "../screens/StorageRegister/ProductAttribs";
import SucessRegister from "../screens/StorageRegister/SucessRegister";

import ProductScanningEdit from "../screens/StorageConsult/ProductScan";
import ProductAttribsEdit from "../screens/StorageConsult/ProductAttribs";
import SucessEdit from "../screens/StorageConsult/SucessEdit";
import ProductEdit from "../screens/StorageConsult/ProductEdit";

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

      <Stack.Screen
        name="ProductScanningEdit"
        component={ProductScanningEdit}
      />
      <Stack.Screen name="ProductAttribsEdit" component={ProductAttribsEdit} />
      <Stack.Screen name="SucessEdit" component={SucessEdit} />
      <Stack.Screen name="ProductEdit" component={ProductEdit} />
    </Stack.Navigator>
  );
};

export default Routes;
