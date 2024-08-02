import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import Routes from "./app/routes";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "./app/contexts/authContext";
import Loading from "./app/components/loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <SafeAreaProvider>
          <Routes />
        </SafeAreaProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
