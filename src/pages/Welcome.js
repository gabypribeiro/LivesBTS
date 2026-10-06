import React from "react";

import {
  Text,
  View,
  ImageBackground,
  StatusBar,
  Pressable,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./Welcome.styles";

export function Welcome({ navigation }) {
  function iniciar() {
    navigation.replace("Cadastro");
  }

  return (
    <View style={styles.safeArea}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <ImageBackground
        source={require("../../assets/fundo BTS.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <SafeAreaView style={styles.overlay}>
          <View style={styles.container}>
            <View style={styles.tituloContainer}>
              <Text style={styles.seja}>
                seja
              </Text>

              <Text style={styles.titulo}>
                bem-vindo
              </Text>
            </View>

            <Text style={styles.subtitulo}>
              um cantinho pra você ❀
            </Text>

            <Pressable
              style={styles.botao}
              onPress={iniciar}
            >
              <Text style={styles.textoBotao}>
                INICIAR
              </Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}