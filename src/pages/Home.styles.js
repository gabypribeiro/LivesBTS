import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#91C5A0",
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 25,
  },

  logo: {
    width: 600,
    height: 100,
    alignSelf: "center",
    marginTop: 3,
    marginBottom: 2,
  },

  titulo: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 0,
  },

  subtitulo: {
    color: "#FFFFFF",
    fontSize: 13,
    textAlign: "center",
    marginTop: 3,
    marginBottom: 8,
  },

  destaque: {
    backgroundColor: "#FFFFFF",
    height: 118,
    borderRadius: 18,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  destaqueContent: {
    flex: 1,
  },

  tag: {
    backgroundColor: "#76BE89",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginBottom: 8,
  },

  tagText: {
    color: "#FFFFFF",
    fontSize: 8,
    fontWeight: "bold",
  },

  destaqueTitulo: {
    color: "#333333",
    fontSize: 13,
    width: 125,
    lineHeight: 17,
    marginBottom: 8,
  },

  botao: {
    backgroundColor: "#239A45",
    alignSelf: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 15,
  },

  botaoText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "bold",
  },

  personagem: {
    width: 120,
    height: 120,
    marginRight: 20,
  },

  pergunta: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 13,
    marginTop: 15,
    marginBottom: 12,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    height: 116,
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },

  icone: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#91C5A0",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },

  iconeText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  cardText: {
    color: "#598064",
    fontSize: 14,
    fontWeight: "bold",
  },

  curiosidade: {
    backgroundColor: "#B9DFC3",
    minHeight: 94,
    borderRadius: 12,
    marginTop: 8,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  curiosidadeBox: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    borderRadius: 10,
    padding: 8,
  },

  curiosidadeTitulo: {
    color: "#333333",
    fontSize: 11,
    marginBottom: 5,
  },

  voceSabia: {
    color: "#55A66C",
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 3,
  },

  curiosidadeTexto: {
    color: "#555555",
    fontSize: 7,
    lineHeight: 10,
  },

  descobrir: {
    color: "#55A66C",
    fontSize: 7,
    marginTop: 3,
  },

  personagemFinalArea: {
    width: 80,
    height: 70,
    marginLeft: 7,
    marginRight: 3,
    justifyContent: "center",
    alignItems: "center",
  },

  personagemFinal: {
    width: 150,
    height: 300,
  },
});