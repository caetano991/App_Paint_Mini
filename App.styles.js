import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // ==========================================
  // 1. CONTAINER PRINCIPAL
  // ==========================================

  container: {
    flex: 1,
    backgroundColor: "#151c29",
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 15,
  },

  // ==========================================
  // 2. TÍTULO E SUBTÍTULO
  // ==========================================

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 5,
  },

  subtitulo: {
    fontSize: 15,
    color: "#A9B8D0",
    textAlign: "center",
    marginBottom: 20,
  },

  // ==========================================
  // 3. ÁREA DE DESENHO
  // ==========================================

  areaDesenho: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 20,
    minHeight: 150,
  },

  // ==========================================
  // 4. TÍTULOS DOS CONTROLES
  // ==========================================

  label: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },

  // ==========================================
  // 5. PALETA DE CORES
  // ==========================================

  paleta: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    marginBottom: 20,
  },

  // Estilo aplicado a cada botão de cor
  botaoCor: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: "#596273",
  },

  // Estilo adicional aplicado à cor selecionada
  corSelecionada: {
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },

  // ==========================================
  // 6. CONTROLE DA ESPESSURA DO PINCEL
  // ==========================================

  controle: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 20,
  },

  botaoControle: {
    flex: 1,
    backgroundColor: "#343E51",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
  },

  // ==========================================
  // 7. BOTÕES DE AÇÃO
  // ==========================================

  acoes: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 10,
  },

  // Botão responsável por desfazer o último traço
  botaoAcao: {
    flex: 1,
    backgroundColor: "#343E51",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  // Botão responsável por limpar todo o desenho
  botaoLimpar: {
    flex: 1,
    backgroundColor: "#8660E9",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  // Estilo compartilhado pelos textos dos botões
  textoAcao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
}); 