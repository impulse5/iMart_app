import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/authContext";
import Button from "../../components/button";
import { LogOut } from "lucide-react-native";
import { COLORS } from "../../utils/colors";

export default function Initial() {
  const navigation = useNavigation();
  const { user, logout } = useAuth();

  function handleLogout() {
    logout();
    navigation.navigate("Login" as never);
    console.log("deslogado chefe!");
  }

  return (
    <View style={styles.background}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/imart_logo_white.png")}
      />
      <TouchableOpacity style={styles.logoutIcon} onPress={handleLogout}>
        <LogOut color={COLORS.off_white} size={24} strokeWidth={3} />
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.hero}>
          <Image
            style={{ width: 120, height: 120 }}
            source={require("../../../assets/images/imart_favicon_black.png")}
          />
          <Text style={styles.text}>
            Bem vindo, {user ? user.data.attributes.name : "Usuário"}!
          </Text>
        </View>
        <View style={styles.viewButton}>
          <Button
            title={"Cadastrar estoque"}
            onPress={() => {
              navigation.navigate("Login" as never);
            }}
            height={60}
            buttonStyle={{
              width: "80%",
            }}
          />
          <Button
            title={"Consultar estoque"}
            onPress={() => {
              navigation.navigate("Login" as never);
            }}
            height={60}
            buttonStyle={{
              width: "80%",
            }}
          />
        </View>
        <Text style={styles.versionText}>iMart v1.9.3</Text>
      </View>
    </View>
  );
}
