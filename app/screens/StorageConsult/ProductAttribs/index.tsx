import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  Platform,
  KeyboardAvoidingView,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeft } from "lucide-react-native";
import { styles } from "./styles";
import { deleteStorage } from "../../../services/storageService";

export default function ProductAttribsEdit({ route }: any) {
  const navigation = useNavigation();
  const { dataStorage, storage } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [lotConfirmation, setLotConfirmation] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const lotProduct = storage.lot;

  function handleReturn() {
    navigation.goBack();
  }

  function handleDelete() {
    setModalVisible(true);
  }

  async function confirmDelete() {
    setLoading(true);
    if (lotConfirmation === storage.lot) {
      try {
        await deleteStorage(dataStorage);
        // @ts-ignore
        navigation.navigate("SucessDelete" as never, lotProduct);
        console.log(lotProduct);
      } catch (error) {
        Alert.alert("Erro", "Não foi possível deletar o estoque.");
        throw error;
      } finally {
        setModalVisible(false);
        setLoading(false);
      }
    } else {
      console.log("Identificação do lote incorreta");
    }
  }

  function goToEdit() {
    // @ts-ignore
    navigation.navigate("ProductEdit", { storage, dataStorage });
  }

  const isConfirmButtonEnabled = lotConfirmation === storage.lot;

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

          <Text style={styles.infoText}>
            <Text style={styles.label}>Código: </Text>
            <Text style={styles.labelInfo}>{storage.code}</Text>
          </Text>

          <Text style={styles.infoText}>
            <Text style={styles.label}>Fornecedor: </Text>
            <Text style={styles.labelInfo}>{storage.supplier}</Text>
          </Text>

          <Text style={styles.infoText}>
            <Text style={styles.label}>Status: </Text>
            <Text style={styles.labelInfo}>
              {storage.on_shelf ? "Em Prateleira" : "Em Estoque"}
            </Text>
          </Text>

          <Text style={styles.infoText}>
            <Text style={styles.label}>Mensuração: </Text>
            <Text style={styles.labelInfo}>{storage.measurement}</Text>
          </Text>

          <Text style={styles.infoText}>
            <Text style={styles.label}>Quantidade: </Text>
            <Text style={styles.labelInfo}>{storage.quantity}</Text>
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
            <Text style={styles.buttonText}>Excluir Item</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editButton} onPress={goToEdit}>
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
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
              style={{ flex: 1 }}
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                  <Text style={styles.modalTitle}>Você tem certeza?</Text>
                  <Text style={styles.modalMessage}>
                    Caso deseje excluir, digite a identificação ({storage.lot})
                    do lote no campo abaixo
                  </Text>
                  <TextInput
                    style={styles.modalInput}
                    value={lotConfirmation}
                    onChangeText={setLotConfirmation}
                    placeholder={`${storage.lot}`}
                  />
                  <View style={styles.modalButtonContainer}>
                    <TouchableOpacity
                      style={[styles.modalButton, styles.modalCancelButton]}
                      onPress={() => setModalVisible(false)}
                    >
                      <Text style={styles.modalCancelButtonText}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.modalButton,
                        styles.modalConfirmButton,
                        {
                          backgroundColor: isConfirmButtonEnabled
                            ? "red"
                            : "gray",
                        },
                      ]}
                      onPress={confirmDelete}
                      disabled={!isConfirmButtonEnabled}
                    >
                      <Text style={styles.modalConfirmButtonText}>
                        {loading ? (
                          <ActivityIndicator size="small" color="#ffffff" />
                        ) : (
                          "Confirmar"
                        )}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
}
