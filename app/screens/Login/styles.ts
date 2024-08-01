import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "15%",
    backgroundColor: COLORS.primary,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 36,
    backgroundColor: COLORS.off_white,
    width: "100%",
    borderRadius: 24,
  },
  text: {
    color: COLORS.primary,
    fontFamily: "Poppins-SemiBold",
    fontSize: 60,
  },
  image: {
    width: 132,
    height: 50,
    marginBottom: "15%",
  },
  inputView: {
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 4,
    width: "80%",
    marginHorizontal: "auto",
    marginVertical: 14,
  },
  inputLabel: {
    color: COLORS.primary,
    fontFamily: "Poppins-Medium",
    fontSize: 24,
  },
  inputField: {
    borderWidth: 1,
    borderColor: COLORS.gray_secondary,
    padding: 8,
    width: "100%",
    height: 48,
    borderRadius: 6,
  },
  errorText: {
    color: COLORS.error,
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
});
