import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeft } from "lucide-react-native";
import { styles } from "./styles";
import Button from "../../../components/button";
import { COLORS } from "../../../utils/colors";
import { updateStorage } from "../../../services/storageService";

export default function ProductEdit({ route }: any) {
  const navigation = useNavigation();
  const { storage, dataStorage } = route.params;
  const [quantity, setQuantity] = useState(storage.quantity);
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  function handleReturn() {
    navigation.goBack();
  }

  async function handleSave() {
    setLoading(true);
    try {
      await updateStorage(dataStorage, quantity);
      // @ts-ignore
      navigation.navigate("SucessEdit" as never, {
        productName: storage.name,
        productQuantity: quantity,
      });
    } catch {
      console.log("falhou a edição");
    } finally {
      setLoading(false);
      console.log("Estoque editado, nova quantidade:", quantity);
      console.log(dataStorage);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.return} onPress={handleReturn}>
            <ChevronLeft color="black" />
            <Text>Voltar</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Consultar Estoque</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.productName}>{storage.name}</Text>
          <View style={styles.productLot}>
            <Text style={styles.productLotText}>Lote</Text>
            <Text style={styles.productLotText}>#{storage.lot}</Text>
          </View>
          {!isInputFocused && (
            <View>
              <Text style={styles.infoText}>
                <Text style={styles.label}>Código: </Text>
                <Text style={styles.labelInfo}>{storage.code}</Text>
              </Text>
              <Text style={styles.infoText}>
                <Text style={styles.label}>Fornecedor: </Text>
                <Text style={styles.labelInfo}>{storage.supplier}</Text>
              </Text>
              <Text style={styles.infoText}>
                <Text style={styles.label}>Mensuração: </Text>
                <Text style={styles.labelInfo}>{storage.measurement}</Text>
              </Text>
            </View>
          )}
          <View style={styles.quantityContainer}>
            <Text style={styles.label}>Quantidade: </Text>
            <TextInput
              style={styles.input}
              onChangeText={(v) => {
                if (!isNaN(Number(v))) {
                  setQuantity(v);
                }
              }}
              editable={!loading}
              value={quantity ? String(quantity) : "1"}
              placeholder="Quantidade"
              keyboardType="numeric"
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          {!isInputFocused && (
            <Button
              title={loading ? "" : "Salvar Alterações"}
              onPress={handleSave}
              height={60}
              buttonStyle={{
                width: "80%",
                marginBottom: 24,
                marginHorizontal: "auto",
                backgroundColor: loading
                  ? COLORS.gray_secondary
                  : COLORS.primary,
              }}
              fontFamily="Poppins-Bold"
              disabled={loading}
            >
              {loading && <ActivityIndicator size="small" color="#ffffff" />}
            </Button>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
