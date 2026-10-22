import {View, Text, TouchableOpacity} from 'react-native';

import {cores} from "../data/cores"
import {styles} from "../../App.styles"

export function PaletaCores({cor, selecionarCor}) {
    return (
        <> 
            <Text style={styles.label}> 
                Escolha uma cor:
            </Text>

            <View style={styles.PaletaCores}>
                {cores.map((item) => (
                    <TouchableOpacity
                        key={item}
                        style={[styles.botaoCor,
                        {backgroundColor: item},
                        cor === item && styles.corSelecionada,
                        ]}

                        onPress={() => selecionarCor(item)}
                    />
                ))}
            </View>
        
        </>
    );
}