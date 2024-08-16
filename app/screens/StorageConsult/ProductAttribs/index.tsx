import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeft } from "lucide-react-native";
import { styles } from "./styles";

export default function ProductAttribsEdit({ route }: any) {
  // mock
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
  const [quantity, setQuantity] = useState(product.quantity.toString());
  const [modalVisible, setModalVisible] = useState(false);
  const [lotConfirmation, setLotConfirmation] = useState("");

  function handleReturn() {
    navigation.goBack();
  }

  function handleDelete() {
    setModalVisible(true);
  }

  function confirmDelete() {
    if (lotConfirmation === product.lot) {
      // deleteProduct(product.id);
      Alert.alert("Estoque excluído");
      setModalVisible(false);
      navigation.navigate("SucessDelete" as never);
    } else {
      Alert.alert("Identificação do lote incorreta");
    }
  }

  function handleEdit() {
    navigation.navigate("ProductEdit" as never);
  }

  const isConfirmButtonEnabled = lotConfirmation === product.lot;

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
          <Text style={styles.infoText}>
            <Text style={styles.label}>Quantidade: </Text>
            <Text style={styles.labelInfo}>{product.quantity}</Text>
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
            <Text style={styles.buttonText}>Excluir Item</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
            <Text style={styles.buttonText}>Editar Estoque</Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Você tem certeza?</Text>
              <Text style={styles.modalMessage}>
                Caso deseje excluir, digite a identificação ({product.lot}) do
                lote no campo abaixo
              </Text>
              <TextInput
                style={styles.modalInput}
                value={lotConfirmation}
                onChangeText={setLotConfirmation}
                placeholder={`#${product.lot}`}
              />
              <View style={styles.modalButtonContainer}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.modalCancelButton]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.modalCancelButtonText}>Cancelar</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                  style={[styles.modalButton, styles.modalConfirmButton]}
                  onPress={confirmDelete}
                >
                  <Text
                    style={styles.modalConfirmButtonText}
                    onPress={() => {
                      navigation.navigate("SucessDelete" as never);
                    }}
                  >
                    Confirmar
                  </Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                  style={[
                    styles.modalButton,
                    styles.modalConfirmButton,
                    {
                      backgroundColor: isConfirmButtonEnabled ? "red" : "gray",
                    },
                  ]}
                  onPress={confirmDelete}
                  disabled={!isConfirmButtonEnabled}
                >
                  <Text style={styles.modalConfirmButtonText}>Confirmar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
}
