import { Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LIVES_DATA } from "../../data/mockLives";
import { CardLive } from "../../components/CardLives/CardLives";
import { styles } from "./Lives.styles";

export function Lives({ navigation }) {
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

        <Text style={styles.boasVindas}>
          Bem-vindo de volta!
        </Text>

        <Text style={styles.titulo}>
          LISTA DE LIVES DISPONÍVEIS
        </Text>

        {LIVES_DATA.map((item) => (
          <CardLive
            key={item.id}
            item={item}
            onPress={() => navigation.navigate("DetalhesLive", { live: item })}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}