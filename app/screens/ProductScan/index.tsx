import {
  CameraView,
  useCameraPermissions,
  BarcodeScanningResult,
} from "expo-camera";
import { styles } from "./styles";
import { useState, useEffect } from "react";
import { Button, Text, TouchableOpacity, View, Alert } from "react-native";
import { CameraIcon, ChevronLeft, QrCode } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

export default function ProductScanning() {
  const navigation = useNavigation();
  const [permission, requestPermission] = useCameraPermissions();
  const [isCameraReady, setIsCameraReady] = useState<boolean>(false);
  const [scanned, setScanned] = useState<boolean>(false);

  function adminNavigate() {
    navigation.navigate("ProductAttribs" as never);
  }

  function handleReturn() {
    navigation.navigate("Initial" as never);
  }

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

  const handleBarcodeScanned = ({ data }: BarcodeScanningResult) => {
    if (scanned) {
      return;
    }
    setScanned(true);
    Alert.alert("Código Escaneado", `ID: ${data}`);
    setTimeout(() => {
      setScanned(false);
    }, 3000);
  };

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Você precisa de permissão para acessar a câmera!
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
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
            barcodeTypes: ["ean13", "ean8"],
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
      <View style={styles.mainView}>
        <QrCode height={120} width={120} color="black" />
        <Text style={styles.mainText}>
          Escaneie o código de barras do produto para continuar
        </Text>
        <TouchableOpacity onPress={adminNavigate}>
          <Text>AVANÇAR(dev)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
