import { View } from "react-native";
import { View, PanResponder } from "react-native"
import Svg, { Path } from "react-native-svg";
import { styles } from "../style/App.styles"


export function AreaDesenho({tracos,setTracos,tracoAtual,setTracoAtual,cor,espessura}){
    const desenhoRef = useRef("");
    const corRef = useRef(cor);
    const espessuraRef = useRef(espessura);
    corRef.current = cor;
    espessuraRef.current = espessura;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoceShouldSetPanResponder: () => true,
            onPanResponderGrant: (evento) => {
                const {locationX, locantionY} =
                event.nativeEvent;

                const inicio = M ${locationX} ${locationY};

                desenhoRef.current = inicio;

                setTracoAtual(inicio);
            },

            onPanResponderRelease: () => {
                const caminho = desenhoRef.current;

                if (caminho) {
                    setTracos((anteriores) => [
                        anteriores,
                        { 
                            caminho: caminho,
                            cor: corRef.current,
                            espessura:espessuraRef.current,
                        },
                    ]);
                }
                desenhoRef.current = "";
                setTracoAtual("");
            },
        })
    ).current;

    return(
        <View 
            style={styles.AreaDesenho}
            {...panResponder.panHandlers}
        >

            <Svg width="100%" height="100%">
                {tracos.map((traco, index => 
                <Path
                    key={index}
                    d={traco.caminho}
                    stroke={traco.cor}
                    strokeWidth={traco.espessura}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            ))}

            <Path 
                d={tracoAtual}
                stroke={cor}
                strokeWidth={espessura}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"                
            />
          </Svg>
        </View>
    )
}