import React, { useState } from "react";

import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

import { styles } from "./Cadastro.styles";

export function Cadastro({ navigation }) {
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  function handleCadastro() {
    if (
      !email.trim() ||
      !usuario.trim() ||
      !senha.trim() ||
      !confirmarSenha.trim()
    ) {
      Alert.alert(
        "Campos incompletos",
        "Por favor, preencha todos os campos."
      );
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      Alert.alert(
        "E-mail inválido",
        "Digite um endereço de e-mail válido."
      );
      return;
    }

    if (senha.length < 6) {
      Alert.alert(
        "Senha fraca",
        "A senha deve ter no mínimo 6 caracteres."
      );
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert(
        "Senhas diferentes",
        "As senhas não são iguais."
      );
      return;
    }

    Alert.alert(
      "Parabéns!",
      "Conta criada com sucesso!",
      [
        {
          text: "Ir para o login",
          onPress: () => navigation.navigate("Login"),
        },
      ]
    );
  }

  return (
    <>
      <StatusBar
        backgroundColor="#8DC39C"
        barStyle="light-content"
      />

      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <Image
              source={require("../../assets/YET TO COME.png")}
              style={styles.logo}
              resizeMode="contain"
            />

            <Text style={styles.titulo}>
              Cadastrar
            </Text>

            <Text style={styles.subtitulo}>
              Ei! Estamos quase lá. Crie sua{"\n"}
              conta para entrar.
            </Text>
          </View>

          <View style={styles.formCard}>
            <View style={styles.inputContainer}>
              <Text style={styles.icone}>✉</Text>

              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

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

            <View style={styles.inputContainer}>
              <Text style={styles.icone}>🔒</Text>

              <TextInput
                style={styles.input}
                placeholder="Confirme sua senha"
                placeholderTextColor="#999"
                secureTextEntry={true}
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
              />
            </View>

            <TouchableOpacity
              style={styles.botaoCadastro}
              activeOpacity={0.8}
              onPress={handleCadastro}
            >
              <Text style={styles.textoBotao}>
                CADASTRAR
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.linkLogin}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.textoLink}>
                Já tem uma conta?{" "}
                <Text style={styles.entrar}>
                  Entrar
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}