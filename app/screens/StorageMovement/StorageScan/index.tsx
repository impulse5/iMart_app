import React, { useState, useEffect } from "react";
import {
  CameraView,
  useCameraPermissions,
  BarcodeScanningResult,
} from "expo-camera";
import { styles } from "./styles";
import {
  Text,
  TouchableOpacity,
  View,
  Alert,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from "react-native";
import {
  CameraIcon,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  QrCode,
  X as XIcon,
} from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { getStorageById, moveStorages } from "../../../services/storageService";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import Button from "../../../components/button";
import { COLORS } from "../../../utils/colors";

export default function StorageScanMovement() {
  const navigation = useNavigation();
  const [permission, requestPermission] = useCameraPermissions();
  const [isCameraReady, setIsCameraReady] = useState<boolean>(false);
  const [scanned, setScanned] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const windowHeight = Dimensions.get("window").height;
  const [scannedItems, setScannedItems] = useState<any[]>([]);

  const drawerHeight = useSharedValue(windowHeight * 0.5);
  const expandedHeight = windowHeight * 0.85;

  const [isDrawerExpanded, setIsDrawerExpanded] = useState<boolean>(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withSpring(drawerHeight.value),
    };
  }, [drawerHeight.value]);

  const toggleExpansion = () => {
    const newHeight =
      drawerHeight.value === windowHeight * 0.5
        ? expandedHeight
        : windowHeight * 0.5;

    drawerHeight.value = newHeight;
    setIsDrawerExpanded(newHeight === expandedHeight);
  };

  const handleReturn = () => {
    navigation.navigate("Initial" as never);
  };

  useEffect(() => {
    if (permission && permission.granted) {
      setTimeout(() => {
        setIsCameraReady(true);
      }, 2000);
    }
  }, [permission]);

  if (!permission) {
    return <View />;
  }

  const handleSave = async () => {
    setLoading(true);
    try {
      const storageIds = scannedItems.map((item) => item.id);
      console.log(storageIds);
      await moveStorages(storageIds);
      // @ts-ignore
      navigation.navigate("SucessMove" as never, {
        storageSize: scannedItems.length,
      });
      setScannedItems([]);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível mover os estoques.");
    } finally {
      setLoading(false);
    }
  };

  const handleBarcodeScanned = async ({ data }: BarcodeScanningResult) => {
    setScanned(true);
    if (scanned) {
      return;
    }

    try {
      const [, storageId] = data.split("###");
      const isAlreadyScanned = scannedItems.some(
        (item) => item.id === storageId
      );

      if (isAlreadyScanned) {
        Alert.alert("Aviso", "Este estoque já foi escaneado.");
        return;
      }

      const storageData = await getStorageById(storageId);
      setScannedItems((prevItems) => [
        ...prevItems,
        {
          id: storageId,
          name: storageData.storage.data.attributes.product.name,
          lot: storageData.storage.data.attributes.batch,
          on_shelf: storageData.storage.data.attributes.on_shelf,
        },
      ]);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível encontrar o produto.");
    } finally {
      setTimeout(() => {
        setScanned(false);
      }, 3000);
    }
  };

  const handleRemoveItem = (id: string) => {
    setScannedItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Você precisa de permissão para acessar a câmera!
        </Text>
        <TouchableOpacity onPress={requestPermission} style={styles.button}>
          <Text>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.return} onPress={handleReturn}>
          <ChevronLeft color="black" />
          <Text>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Escanear Produto</Text>
      </View>
      {isCameraReady ? (
        <CameraView
          style={styles.camera}
          facing="back"
          onBarcodeScanned={handleBarcodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ["qr"],
          }}
          onCameraReady={() => setIsCameraReady(true)}
        >
          <View style={styles.buttonContainer}></View>
        </CameraView>
      ) : (
        <View style={styles.loadingContainer}>
          <CameraIcon height={120} width={120} color="black" />
        </View>
      )}
      <View style={styles.cameraBorder} />
      <View style={styles.modalBackground}>
        <Animated.View style={[styles.bottomSheet, animatedStyle]}>
          {scannedItems.length === 0 ? (
            <View style={styles.emptyStateContainer}>
              <QrCode size={120} color="black" />
              <Text style={styles.emptyStateText}>
                Escaneie o QR code dos estoques para movê-los.
              </Text>
            </View>
          ) : (
            <FlatList
              data={scannedItems}
              keyExtractor={(item) => item.lot}
              renderItem={({ item }) => (
                <View style={styles.listItem}>
                  <View style={styles.listItemContent}>
                    <Text style={styles.listItemLot}>Lote: #{item.lot}</Text>
                    <Text style={styles.listItemName}>{item.name}</Text>
                    <Text style={styles.listItemName}>
                      {item.on_shelf ? "Em prateleira" : "Em Estoque"}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => handleRemoveItem(item.id)}
                    style={styles.removeButton}
                  >
                    <XIcon size={24} color="black" />
                  </TouchableOpacity>
                </View>
              )}
            />
          )}
          {isDrawerExpanded && scannedItems.length > 0 && (
            <Button
              onPress={handleSave}
              title={loading ? "" : "Salvar Alterações"}
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
          <TouchableOpacity
            style={styles.expandDrawerButton}
            onPress={toggleExpansion}
          >
            {isDrawerExpanded ? (
              <ChevronDown size={36} color="black" />
            ) : (
              <ChevronUp size={36} color="black" />
            )}
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}
