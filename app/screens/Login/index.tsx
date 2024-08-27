import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/authContext";
import { styles } from "./styles";
import { TextInput } from "react-native-gesture-handler";
import { COLORS } from "../../utils/colors";
import Button from "../../components/button";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const { login, error } = useAuth();

  const handleLogin = async () => {
    setLoading(true);
    try {
      await login({ email, password });
    } finally {
      setLoading(false);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.background}>
          <Image
            style={styles.image}
            source={require("../../../assets/images/imart_logo_white.png")}
          />
          <View style={styles.container}>
            {!isInputFocused && (
              <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>Login</Text>
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
              </View>
            )}
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
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => setIsInputFocused(false)}
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
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => setIsInputFocused(false)}
                />
              </View>
            </View>
            {!isInputFocused && (
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
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
