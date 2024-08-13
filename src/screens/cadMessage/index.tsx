import { KeyboardAvoidingView, View, Text, TextInput, Alert, Image, TouchableOpacity } from "react-native";
import { ComponentBackground2 } from "../../components";
import { IMessage } from '../../services/data/Message'
import { useState } from "react";
import { useAuth } from "../../hook";
import { apiMessage } from "../../services/data";
import { MessageTypes } from "../../navigation/message.navigation";
import { AxiosError } from "axios";

export function CadMessage({navigation}:MessageTypes){
    const [data, setData] = useState<IMessage>()
    const { setLoading } = useAuth()
    function handleChange(itemMessage:IMessage){
        setData({...data, ...itemMessage})
    }
    async function handleCadMessage(){
        if(data?.message){
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
            <KeyboardAvoidingView>
                <Text>Cadastrar Mensagem</Text>
                <View>
                    <Text>Mensagem</Text>
                        <TextInput
                            onChangeText={(letter) => handleChange({message:letter})}>
                        </TextInput>
                </View>
                <TouchableOpacity onPress={handleCadMessage}><Image source={confirm}/></TouchableOpacity>
                <TouchableOpacity onPress={handleListMessage}><Image source={cancel}/></TouchableOpacity>
            </KeyboardAvoidingView>
        </ComponentBackground2>
    )
}