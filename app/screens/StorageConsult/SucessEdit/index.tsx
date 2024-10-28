import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./styles";
import { CircleCheckBig } from "lucide-react-native";
import { COLORS } from "../../../utils/colors";
import Button from "../../../components/button";

export default function SucessEdit() {
  const navigation = useNavigation();
  const route = useRoute();
  const { productName, productQuantity } = route.params as {
    productName: string;
    productQuantity: number;
  };

  function repeatOperation() {
    navigation.navigate("ProductScanningEdit" as never);
  }

  function backToHome() {
    navigation.navigate("Initial" as never);
  }

  return (
    <View style={styles.container}>
      <CircleCheckBig height={150} width={150} color={COLORS.success} />
      <View style={styles.textContent}>
        <Text style={styles.text}>Alterações salvas</Text>
        <Text style={styles.text}>com sucesso!</Text>
        <Text style={styles.textProductName}>{productName}</Text>
        <Text style={styles.textProductName}>{productQuantity}</Text>
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
