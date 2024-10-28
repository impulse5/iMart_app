import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./styles";
import { CircleCheckBig } from "lucide-react-native";
import { COLORS } from "../../../utils/colors";
import Button from "../../../components/button";

export default function SucessMove({ route }: any) {
  const navigation = useNavigation();
  const { storageSize } = route.params;

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
        <Text style={styles.text}>{storageSize.storageSize} Lotes</Text>
        <Text style={styles.text}>Movidos com sucesso!</Text>
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
