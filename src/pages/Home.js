import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./Home.styles";

export function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                <Image
                    source={require("../../assets/YET TO COME HOME.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />

                <Text style={styles.titulo}>Oi, army &lt;3</Text>

                <Text style={styles.subtitulo}>
                    Seu cantinho do BTS está aqui
                </Text>

                <View style={styles.destaque}>
                    <View style={styles.destaqueContent}>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>
                                DESTAQUE DA SEMANA
                            </Text>
                        </View>

                        <Text style={styles.destaqueTitulo}>
                            O melhor ainda está por vir!
                        </Text>

                        <TouchableOpacity style={styles.botao}>
                            <Text style={styles.botaoText}>VEJA MAIS</Text>
                        </TouchableOpacity>
                    </View>

                    <Image
                        source={require("../../assets/cookie.png")}
                        style={styles.personagem}
                        resizeMode="contain"
                    />
                </View>

                <Text style={styles.pergunta}>
                    O que vai fazer hoje?
                </Text>

                <View style={styles.grid}>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate("Lives")}
                    >
                        <View style={styles.icone}>
                            <Text style={styles.iconeText}>▶</Text>
                        </View>

                        <Text style={styles.cardText}>Lives</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card}>
                        <View style={styles.icone}>
                            <Text style={styles.iconeText}>♫</Text>
                        </View>

                        <Text style={styles.cardText}>Música</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card}>
                        <View style={styles.icone}>
                            <Text style={styles.iconeText}>📷</Text>
                        </View>

                        <Text style={styles.cardText}>Câmera</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card}>
                        <View style={styles.icone}>
                            <Text style={styles.iconeText}>🎉</Text>
                        </View>

                        <Text style={styles.cardText}>Bts festa</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.curiosidade}>
                    <View style={styles.curiosidadeBox}>
                        <Text style={styles.curiosidadeTitulo}>
                            um pouquinho de BTS para você
                        </Text>

                        <Text style={styles.voceSabia}>
                            Você sabia?
                        </Text>

                        <Text style={styles.curiosidadeTexto}>
                            O BTS debutou em 13 de julho de 2013 e desde então
                            inspira milhões de pessoas.
                        </Text>

                        <Text style={styles.descobrir}>
                            descobrir mais →
                        </Text>
                    </View>
                    <View style={styles.personagemFinalArea}>
                        <Image
                            source={require("../../assets/yoongi.png")}
                            style={styles.personagemFinal}
                            resizeMode="contain"
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}