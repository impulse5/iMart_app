import React from "react";
import { View, ActivityIndicator, Image } from "react-native";
import { useState, useEffect } from "react";
import { COLORS } from "../utils/colors";

export default function Loading() {
  const [showIndicator, setShowIndicator] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIndicator(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 36,
        backgroundColor: COLORS.primary,
      }}
    >
      <Image
        style={{ width: 80, height: 80 }}
        source={require("../../assets/images/imart_favicon_white.png")}
      />
      {showIndicator && <ActivityIndicator />}
    </View>
  );
}
