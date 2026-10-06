import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#8DC39C",
  },

  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },

  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 22,
    paddingTop: 265,
    paddingBottom: 65,
  },

  tituloContainer: {
    alignItems: "center",
  },

 seja: {
  fontSize: 25,
  fontWeight: "500",
  color: "#FFFFFF",
  marginBottom: 0,
  transform: [{ translateY: -80 }],
},

  titulo: {
  fontSize: 42,
  fontWeight: "bold",
  color: "#FFFFFF",
  marginTop: 0,
  transform: [{ translateY: -87 }],
},

  subtitulo: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
    bottom: 155,
  },

  botao: {
    position: "absolute",
    bottom: 65,
    left: 22,
    right: 22,
    height: 53,
    backgroundColor: "#079447",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});