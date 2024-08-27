import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeft } from "lucide-react-native";
import { styles } from "./styles";
import { postStorage } from "../../../services/storageService";
import Button from "../../../components/button";
import { COLORS } from "../../../utils/colors";

export default function ProductAttribs({ route }: any) {
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);
  const { data, product } = route.params;
  const [quantity, setQuantity] = useState<string>(
    product.quantity ? String(product.quantity) : "1"
  );

  function handleReturn() {
    navigation.goBack();
  }

  async function handleSave() {
    setLoading(true);
    try {
      await postStorage(data, quantity);
      // @ts-ignore
      navigation.navigate("SucessRegister" as never, {
        productName: product.name,
      });
    } catch (error) {
      console.log("falhou");
      return;
    } finally {
      setLoading(true);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
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
            <Text style={styles.productLot}> </Text>

            {!isInputFocused && (
              <View>
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
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
