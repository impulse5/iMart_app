import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cameraBorder: {
    height: 4,
    backgroundColor: COLORS.primary,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Poppins-Regular",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    marginTop: Constants.statusBarHeight,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
  },
  return: {
    position: "absolute",
    left: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Poppins-Medium",
  },
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    marginTop: 16,
    width: "70%",
    color: COLORS.primary,
    fontFamily: "Poppins-Regular",
    textAlign: "justify",
    fontSize: 18,
  },
});
