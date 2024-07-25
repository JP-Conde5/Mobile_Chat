import { useState } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Alert } from 'react-native';
import { MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { Background2 } from '../../components/background2';
export interface IRegister{
    name?:string
    email?:string
    password?:string   
}

export function Register({ navigation }: LoginTypes){
    const [data, setData] = useState<IRegister>();
    async function handleRegister(){
        if(data?.email && data.name && data.password){
            console.log(data)
        }else{
            Alert.alert("Preencha todos os campos")
        }
    }
    function handleGoBack(){
        navigation.navigate('Login')
    }
    function handleChange(item:IRegister){
        setData({...data, ...item})
    }
    return(
        <Background2>
            <KeyboardAvoidingView>
                <View>
                    <Text>Cadastrar-se</Text>
                    <View>
                        <Text>Nome</Text>
                        <TextInput
                            onChangeText={(letter) => handleChange({name:letter})}>
                            <Ionicons name="person"/>
                        </TextInput>
                    </View>
                    <View>
                        <Text>E-mail</Text>
                        <TextInput
                            autoCapitalize='none'
                            keyboardType='email-address'
                            onChangeText={(letter) => handleChange({name:letter})}>
                            <MaterialIcons name="email"/>
                        </TextInput>
                    </View>
                    <View>
                        <Text>Senha</Text>
                        <TextInput
                            secureTextEntry={true}
                            autoCapitalize='none'
                            onChangeText={(letter) => handleChange({password:letter})}>
                            <Entypo name='key'/>    
                        </TextInput>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Background2>
    )
}