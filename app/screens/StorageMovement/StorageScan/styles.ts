import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../utils/colors";
import Constants from "expo-constants";

const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  listContainer: {
    flex: 1,
  },
  listItemLot: {
    fontFamily: "Poppins-Regular",
    fontSize: 21,
  },
  listItemName: {
    fontFamily: "Poppins-Light",
    fontSize: 18,
  },
  listItem: {
    marginBottom: 10,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  closeDrawerButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  openDrawerButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 50,
  },
  bottomSheet: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: "100%",
    position: "absolute",
    bottom: 0,
    zIndex: 10,
    paddingTop: 48,
    paddingHorizontal: 16,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
    zIndex: 20,
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
  expandDrawerButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyStateText: {
    marginTop: 16,
    width: "70%",
    color: COLORS.primary,
    fontFamily: "Poppins-Regular",
    textAlign: "justify",
    fontSize: 18,
  },
  listItemContent: {
    flexDirection: "column",
  },
  removeButton: {
    padding: 8,
  },
});
