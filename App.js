import React, { useState } from "react";

import { View, Text } from "react-native";

import { AreaDesenho } from "./src/components/AreaDesenho";
import { PaletaCores } from "./src/components/PaletaCores";
import { Controles } from "./src/components/Controles";

import { styles } from "./src/styles/App.styles";

export default function App() {
  const [tracos, setTracos] = useState([]);

  const [tracoAtual, setTracoAtual] = useState("");

  const [cor, setCor] = useState("#222222");

  const [espessura, setEspessura] = useState(5);

  function limparDesenho() {
    setTracoAtual("");
  }

  function desfazer() {
    setTracos((anteriores) => anteriores.slice(0, -1));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mini Paint</Text>

      <Text style={styles.subtitulo}>Desenhe com o dedo!</Text>

      <AreaDesenho
        tracos={tracos}
        setTracos={setTracos}
        tracoAtual={tracoAtual}
        setTracoAtual={setTracoAtual}
        cor={cor}
        espessura={espessura}
      />

      <PaletaCores cor={cor} selecionarCor={setCor} />

      <Controles
        espessura={espessura}
        setEspessura={setEspessura}
        desfazer={desfazer}
        limparDesenho={limparDesenho}
      />
    </View>
  );
}