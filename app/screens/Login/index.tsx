import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { styles } from "./styles";
import { TextInput } from "react-native-gesture-handler";
import Button from "../../components/button";

const Login = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
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

    try {
      await login({ email, password });
    } catch (err: any) {
      setErrorMessage("O email ou senha inseridos estão incorretos");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              />
            </View>
          </View>
          <Button
            title="Entrar"
            onPress={handleLogin}
            height={60}
            buttonStyle={{ width: "80%", marginBottom: 24 }}
            fontFamily="Poppins-Bold"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
