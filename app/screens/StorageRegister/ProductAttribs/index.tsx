import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeft } from "lucide-react-native";
import { styles } from "./styles";
import { postStorage } from "../../../services/storageService";

export default function ProductAttribs({ route }: any) {
  const product = {
    name: "Creme de Cabelo",
    lot: "102938",
    code: "7891150060883",
    supplier: "Seda",
    price: "10,99",
    category: "Higiene",
    measurement: "UND",
    quantity: 1,
  };
  const navigation = useNavigation();
  // const { data } = route.params;
  const [quantity, setQuantity] = useState(product.quantity.toString());

  function handleReturn() {
    navigation.goBack();
  }

  // async function handleSave() {
  //   try {
  //     const productID = await postStorage(data);
  //     // @ts-ignore
  //     navigation.navigate("SucessRegister" as never, {
  //       productName: product.name,
  //     });
  //     console.log("Estoque editado, nova quantidade:", quantity);
  //   } catch {}
  // }

  function handleSave() {
    // @ts-ignore
    navigation.navigate("SucessRegister" as never, {
      productName: product.name,
    });
    console.log("Estoque editado, nova quantidade:", quantity);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.return} onPress={handleReturn}>
            <ChevronLeft color="black" />
            <Text>Voltar</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Cadastrar Estoque</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productLot}>
            <Text>Lote #{product.lot}</Text>
          </Text>

          <Text style={styles.infoText}>
            <Text style={styles.label}>Código: </Text>
            <Text style={styles.labelInfo}>{product.code}</Text>
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.label}>Fornecedor: </Text>
            <Text style={styles.labelInfo}>{product.supplier}</Text>
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.label}>Preço: </Text>
            <Text style={styles.labelInfo}>R${product.price}</Text>
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.label}>Categoria: </Text>
            <Text style={styles.labelInfo}>{product.category}</Text>
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.label}>Mensuração: </Text>
            <Text style={styles.labelInfo}>{product.measurement}</Text>
          </Text>
          <View style={styles.quantityContainer}>
            <Text style={styles.label}>Quantidade: </Text>
            <TextInput
              style={styles.input}
              value={quantity}
              keyboardType="numeric"
              // onChangeText={setQuantity}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Salvar Alterações</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
