import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./CardLives.styles";

export function CardLive({ item, onPress }) {
  const isDisponivel = item.status === "Assistir";

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >
      <View style={styles.headerCard}>
        <Text style={styles.titulo}>
          {item.titulo}
        </Text>

        <View
          style={[
            styles.badge,
            isDisponivel
              ? styles.badgeDisponivel
              : styles.badgeIndisponivel,
          ]}
        >
          <Text
            style={[
              styles.textoBadge,
              isDisponivel
                ? styles.textoDisponivel
                : styles.textoIndisponivel,
            ]}
          >
            {item.status}
          </Text>
        </View>
      </View>

      <Text style={styles.descricao}>
        {item.descricao}
      </Text>
    </TouchableOpacity>
  );
}