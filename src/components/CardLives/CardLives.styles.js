import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 7,
    marginBottom: 12,
  },

  headerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
  },

  titulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#111111",
    flex: 1,
  },

  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginLeft: 8,
  },

  badgeDisponivel: {
    backgroundColor: "#DDF3E2",
    borderWidth: 1,
    borderColor: "#55A66C",
  },

  badgeIndisponivel: {
    backgroundColor: "#FDE2E2",
    borderWidth: 1,
    borderColor: "#E57373",
  },

  textoBadge: {
    fontSize: 9,
    fontWeight: "bold",
  },

  textoDisponivel: {
    color: "#3E8B52",
  },

  textoIndisponivel: {
    color: "#D95353",
  },

  descricao: {
    fontSize: 11,
    fontWeight: "600",
    color: "#9B9494",
    lineHeight: 15,
  },
});