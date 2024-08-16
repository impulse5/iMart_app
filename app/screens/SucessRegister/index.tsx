import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./styles";
import { CircleCheckBig } from "lucide-react-native";
import { COLORS } from "../../utils/colors";
import Button from "../../components/button";

export default function SucessRegister() {
  const navigation = useNavigation();
  const route = useRoute();
  const { productName } = route.params as { productName: string };

  function repeatOperation() {
    navigation.navigate("ProductScanning" as never);
  }

  function backToHome() {
    navigation.navigate("Initial" as never);
  }

  return (
    <View style={styles.container}>
      <CircleCheckBig height={150} width={150} color={COLORS.success} />
      <View style={styles.textContent}>
        <Text style={styles.text}>Lote</Text>
        <Text style={styles.textProductName}>{productName}</Text>
        <Text style={styles.text}>Cadastrado com sucesso!</Text>
      </View>
      <View style={styles.viewButton}>
        <Button
          title={"Repetir Operação"}
          onPress={repeatOperation}
          height={60}
          buttonStyle={{
            width: "80%",
          }}
        />
        <Button
          title={"Voltar para a tela Inicial"}
          onPress={backToHome}
          height={60}
          buttonStyle={{
            width: "80%",
          }}
        />
      </View>
    </View>
  );
}
