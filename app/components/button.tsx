import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
  StyleProp,
} from "react-native";
import { COLORS } from "../utils/colors";

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  color?: string;
  textColor?: string;
  fontFamily?: string;
  fontSize?: number;
  textStyle?: TextStyle;
  buttonStyle?: StyleProp<ViewStyle>;
  padding?: number;
  width?: number;
  height?: number;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  color = COLORS.primary,
  textColor = COLORS.secondary,
  fontSize = 24,
  textStyle,
  buttonStyle,
  padding = 8,
  width,
  height,
  fontFamily = "Poppins-Regular",
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: color,
          paddingVertical: padding,
          paddingHorizontal: padding,
          width: width,
          height: height,
        },
        buttonStyle,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          { color: textColor, fontSize: fontSize, fontFamily: fontFamily },
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {},
});

export default Button;
