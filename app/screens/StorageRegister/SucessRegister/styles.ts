import { StyleSheet } from "react-native";
import { COLORS } from "../../../utils/colors";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingTop: Constants.statusBarHeight + 15,
  },
  viewButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
    marginTop: 64,
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 24,
    textAlign: "center",
  },
  textContent: {
    padding: 20,
    textAlign: "center",
    alignItems: "center",
  },
  textProductName: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
  },
});
