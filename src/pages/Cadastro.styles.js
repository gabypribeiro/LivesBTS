import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#8DC39C",
  },

  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#8DC39C",
  },

  header: {
    height: 235,
    alignItems: "center",
    paddingTop: 5,
  },

  logo: {
    width: 200,
    height: 160,
  },

  titulo: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: -2,
    transform: [
      { translateY: -10 }
    ],
  },

  subtitulo: {
    color: "#FFFFFF",
    fontSize: 12,
    textAlign: "center",
    marginTop: 2,
    lineHeight: 14,
    transform: [
      { translateY: -10 }
    ],
  },

  formCard: {
    flex: 1,
    minHeight: 510,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingTop: 82,
    paddingHorizontal: 37,
    alignItems: "center",
  },

  inputContainer: {
    width: "100%",
    height: 32,
    backgroundColor: "#D9D9D9",
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 13,
    paddingHorizontal: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  icone: {
    width: 28,
    textAlign: "center",
    fontSize: 17,
    color: "#000",
    marginRight: 4,
  },

  input: {
    flex: 1,
    height: 32,
    paddingVertical: 0,
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
  },

  botaoCadastro: {
    width: 153,
    height: 33,
    backgroundColor: "#079447",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 49,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
  },

  linkLogin: {
    marginTop: 10,
    alignItems: "center",
  },

  textoLink: {
    color: "#111111",
    fontSize: 11,
  },

  entrar: {
    fontWeight: "bold",
  },
});