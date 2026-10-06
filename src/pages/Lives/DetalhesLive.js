import {
  Text,
  ScrollView,
  Image,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./DetalhesLive.styles";

export function DetalhesLive({ navigation, route }) {

  const { live } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.lista}
      >

        <Image
          source={require("../../../assets/YET TO COME HOME.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <TouchableOpacity
          style={styles.voltar}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.voltarTexto}>
            ← Voltar para a lista
          </Text>
        </TouchableOpacity>

        {/* IMAGEM DA LIVE */}
        <View style={styles.video}>
          <Image
            source={live.imagem}
            style={styles.imagemVideo}
            resizeMode="cover"
          />

          <TouchableOpacity
            style={styles.botaoPlay}
            onPress={() => {
              Linking.openURL(live.link);
            }}
          >
            <Text style={styles.play}>
              ▶
            </Text>
          </TouchableOpacity>
        </View>

        {/* INFORMAÇÕES DA LIVE */}
        <View style={styles.card}>

          <View style={styles.badge}>
            <Text style={styles.badgeTexto}>
              ● {live.status}
            </Text>
          </View>

          <Text style={styles.titulo}>
            {live.titulo}
          </Text>

          <View style={styles.linha} />

          <Text style={styles.descricao}>
            {live.descricao}
          </Text>

        </View>

        {/* SOBRE A LIVE */}
        <View style={styles.card}>

          <Text style={styles.subtitulo}>
            ● Sobre a live
          </Text>

          <Text style={styles.texto}>
            {live.descricao}
          </Text>

        </View>

        {/* RECURSO */}
        <View style={styles.card}>

          <Text style={styles.subtitulo}>
            🔗 Recurso
          </Text>

          <TouchableOpacity
            style={styles.link}
            onPress={() => {
              Linking.openURL(live.link);
            }}
          >

            <Text style={styles.iconeLink}>
              ▣
            </Text>

            <View style={styles.textosLink}>
              <Text style={styles.linkTitulo}>
                Link da live
              </Text>

              <Text style={styles.linkTexto}>
                Assista à gravação quando quiser!
              </Text>
            </View>

            <Text style={styles.seta}>
              ›
            </Text>

          </TouchableOpacity>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}