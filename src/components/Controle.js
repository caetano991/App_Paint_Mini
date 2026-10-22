import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../App.styles";

export function Controle({ espessura, setEspessura, desfazer, limparDesenho }) {
  return (
    <>
      <Text style={styles.label}>Espessura: {espessura}px</Text>

      <View style={styles.controle}>
        <TouchableOpacity
          style={styles.botaoControle}
          onPress={() => {
            setEspessura((valor) => Math.max(2, valor - 2));
          }}
        >
          <Text style={styles.textBotao}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoControle}
          onPress={() => {
            setEspessura((valor) => Math.min(20, valor + 2));
          }}
        >
          <Text style={styles.textBotao}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.acoes}>
        <TouchableOpacity style={styles.botaoAcao} onPress={desfazer}>
          <Text style={styles.textAcao}>Desfazer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoLimpar} onPress={limparDesenho}>
          <Text style={styles.textAcao}>Limpar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}