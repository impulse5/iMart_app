import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/authContext";
import Button from "../../components/button";

export default function Initial() {
  const navigation = useNavigation();
  const { user } = useAuth();
  return (
    <View style={styles.background}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/imart_logo_white.png")}
      />
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
