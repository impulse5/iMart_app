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
  image: {
    width: 132,
    height: 50,
    marginBottom: "15%",
  },
  hero: {
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  text: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 28,
    color: COLORS.primary,
    maxWidth: "90%",
    textAlign: "center",
    flexWrap: "wrap",
  },
  viewButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  versionText: {
    fontFamily: "Poppins-Light",
    fontSize: 18,
    color: COLORS.primary,
  },
  logoutIcon: {
    position: "absolute",
    top: 30,
    right: 10,
  },
});
