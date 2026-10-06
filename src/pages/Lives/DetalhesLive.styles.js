import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#91C5A0",
  },

  lista: {
    paddingBottom: 20,
  },

  logo: {
    width: 150,
    height: 65,
    alignSelf: "center",
    marginTop: 5,
  },

  voltar: {
    marginLeft: 18,
    marginBottom: 8,
  },

  voltarTexto: {
    color: "#FFFFFF",
    fontSize: 12,
  },

  video: {
    height: 170,
    marginHorizontal: 18,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#333",
  },

  imagemVideo: {
    width: "100%",
    height: "100%",
  },

  botaoPlay: {
    position: "absolute",
    top: "35%",
    left: "44%",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.85)",
    justifyContent: "center",
    alignItems: "center",
  },

  play: {
    color: "#555",
    fontSize: 23,
    marginLeft: 3,
  },

  card: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 14,
    marginTop: 8,
    padding: 10,
    borderRadius: 6,
  },

  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#5A9E6B",
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 4,
    marginBottom: 5,
  },

  badgeTexto: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "bold",
  },

  titulo: {
    color: "#222222",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },

  info: {
    color: "#4F794F",
    fontSize: 10,
    fontWeight: "600",
    marginBottom: 3,
  },

  linha: {
    height: 1,
    backgroundColor: "#CCCCCC",
    marginVertical: 10,
  },

  descricao: {
    color: "#777777",
    fontSize: 10,
    lineHeight: 14,
  },

  subtitulo: {
    color: "#333333",
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 5,
  },

  texto: {
    color: "#777777",
    fontSize: 10,
    lineHeight: 14,
    marginBottom: 3,
  },

  link: {
    backgroundColor: "#DDF3E2",
    borderRadius: 6,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  iconeLink: {
    color: "#4F9A5E",
    fontSize: 21,
    marginRight: 8,
  },

  textosLink: {
    flex: 1,
  },

  linkTitulo: {
    color: "#4F794F",
    fontSize: 10,
    fontWeight: "bold",
  },

  linkTexto: {
    color: "#777777",
    fontSize: 9,
    marginTop: 2,
  },

  seta: {
    color: "#6AA875",
    fontSize: 24,
  },

});