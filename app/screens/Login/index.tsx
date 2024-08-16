import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { styles } from "./styles";
import { TextInput } from "react-native-gesture-handler";
import { COLORS } from "../../utils/colors";
import Button from "../../components/button";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { login } = useAuth();

  const handleLogin = async () => {
    setErrorMessage(null);
    if (!email || !password) {
      setErrorMessage("Por favor, preencha todos os campos");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("O email inserido é inválido");
      return;
    }
    setLoading(true);
    try {
      await login({ email, password });
    } catch (err: any) {
      setErrorMessage("O email ou senha inseridos estão incorretos");
    } finally {
      setLoading(false);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.background}>
          <Image
            style={styles.image}
            source={require("../../../assets/images/imart_logo_white.png")}
          />
          <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.text}>Login</Text>
              {errorMessage ? (
                <Text style={styles.errorText}>{errorMessage}</Text>
              ) : null}
            </View>
            <View style={{ width: "100%", marginBottom: 36 }}>
              <View style={styles.inputView}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="example@mail.com"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  editable={!loading}
                />
              </View>
              <View style={styles.inputView}>
                <Text style={styles.inputLabel}>Senha</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="********"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                  editable={!loading}
                />
              </View>
            </View>
            <Button
              title={loading ? "" : "Entrar"}
              onPress={handleLogin}
              height={60}
              buttonStyle={{
                width: "80%",
                marginBottom: 24,
                backgroundColor: loading
                  ? COLORS.gray_secondary
                  : COLORS.primary,
              }}
              fontFamily="Poppins-Bold"
              disabled={loading}
            >
              {loading && <ActivityIndicator size="small" color="#ffffff" />}
            </Button>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
