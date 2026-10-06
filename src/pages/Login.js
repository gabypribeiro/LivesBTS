import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Login.styles";

export function Login({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    if (!usuario.trim() || !senha.trim()) {
      Alert.alert(
        "Campos incompletos",
        "Preencha o usuário e a senha."
      );
      return;
    }

    Alert.alert(
      "Login realizado!",
      "Bem-vindo de volta!",
      [
        {
          text: "OK",
          onPress: () => navigation.replace("Home"),
        },
      ]
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("../../assets/YET TO COME.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.titulo}>Entrar</Text>

          <Text style={styles.subtitulo}>
            Que bom te ver de volta.{"\n"}
            Entre com seu e-mail e senha{"\n"}
            para continuar.
          </Text>
        </View>

        <View style={styles.formCard}>
          <View style={styles.inputContainer}>
            <Text style={styles.icone}>●</Text>

            <TextInput
              style={styles.input}
              placeholder="Usuário"
              placeholderTextColor="#999"
              autoCapitalize="none"
              value={usuario}
              onChangeText={setUsuario}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.icone}>🔒</Text>

            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#999"
              secureTextEntry={true}
              value={senha}
              onChangeText={setSenha}
            />
          </View>

          <TouchableOpacity
            style={styles.botaoLogin}
            activeOpacity={0.8}
            onPress={handleLogin}
          >
            <Text style={styles.textoBotao}>ENTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.linkCadastro}
            onPress={() => navigation.navigate("Cadastro")}
          >
            <Text style={styles.textoLink}>
              Não tem uma conta?{" "}
              <Text style={styles.cadastrar}>Cadastrar</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}