import { KeyboardAvoidingView, View, Text, TextInput, Alert, Image, TouchableOpacity } from "react-native";
import { ComponentBackground2, ComponentHeader } from "../../components";
import { IMessage } from '../../services/data/Message'
import { useState } from "react";
import { useAuth } from "../../hook";
import { apiMessage } from "../../services/data";
import { MessageTypes } from "../../navigation/message.navigation";
import { AxiosError } from "axios";
import { styles } from './style'

export function CadMessage({navigation}:MessageTypes){
    const [data, setData] = useState<IMessage>()
    const { setLoading } = useAuth()
    function handleChange(itemMessage:IMessage){
        setData({...data, ...itemMessage})
    }
    async function handleCadMessage(){
        if(data?.message && data.title){
            setLoading(true)
            try{
                await apiMessage.store(data)
                Alert.alert("Mensagem cadastrada!!!")
                navigation.navigate('ListMessage')
            } catch(error){
                const err = error as AxiosError
                const msg = err.response?.data as string
                Alert.alert(msg)
            }
        } else{
            Alert.alert("Preencha todos os campos!!!")
        }
    }
    function handleListMessage(){
        navigation.navigate("ListMessage")
    }
    const confirm = require('../../assets/confirmar.png')
    const cancel = require('../../assets/cancelar.png')
    return(
        <ComponentBackground2>
            <ComponentHeader/>
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.window}>
                    <Text style={styles.title}>Cadastrar Mensagem</Text>
                    <View>
                        <View>
                            <Text style={styles.text}>Titulo</Text>
                            <TextInput
                                style={styles.write}
                                placeholder="Cumprimento"
                                onChangeText={(letter) => handleChange({title:letter})}>
                            </TextInput>
                        </View>
                        <View>
                        <Text style={styles.text}>Mensagem</Text>
                        <TextInput
                            style={styles.write}
                            multiline={true}
                            numberOfLines={4}
                            placeholder="Oiii!!"
                            onChangeText={(letter) => handleChange({message:letter})}>
                        </TextInput>
                        </View>
                    </View>
                    <View style={styles.bottons}>
                        <TouchableOpacity onPress={handleCadMessage}><Image style={styles.image} source={confirm}/></TouchableOpacity>
                        <TouchableOpacity onPress={handleListMessage}><Image style={styles.image} source={cancel}/></TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
            <View style={styles.footer}/>
        </ComponentBackground2>
    )
}