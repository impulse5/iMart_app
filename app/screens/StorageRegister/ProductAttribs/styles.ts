import { StyleSheet } from "react-native";
import { COLORS } from "../../../utils/colors";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
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
  content: {
    flex: 0.9,
    backgroundColor: COLORS.secondary,
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    width: "100%",
    marginLeft: "auto",
  },
  productName: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "Poppins-Regular",
    textAlign: "center",
  },
  productLot: {
    color: COLORS.gray_primary,
    fontFamily: "Poppins-ExtraLight",
    textAlign: "center",
    fontSize: 25,
    marginBottom: 64,
  },
  infoText: {
    fontSize: 22,
    marginVertical: 7,
    fontFamily: "Poppins-Regular",
  },
  label: {
    fontFamily: "Poppins-Regular",
    fontSize: 22,
  },
  quantityContainer: {
    flexDirection: "column",
    marginVertical: 10,
    marginHorizontal: "auto",
    width: "100%",
  },
  input: {
    borderWidth: 1,
    color: COLORS.primary,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    textAlign: "center",
    fontSize: 22,
    width: "100%",
  },
  buttonContainer: {
    marginTop: 20,
    paddingHorizontal: 24,
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 5,
    width: "100%",
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 12,
    width: "100%",
  },
  saveButtonText: {
    color: COLORS.secondary,
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 20,
  },
  labelInfo: {
    fontFamily: "Poppins-ExtraLight",
  },
});
