import { ComponentHeader, ComponentBackground2 } from "../../components";
import { KeyboardAvoidingView, View, Text, TextInput, Alert, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";
import { MaterialIcons, Entypo } from "@expo/vector-icons"
import { useState } from "react";
import { MenuStackTypes } from "../../navigation/MenuStack.navigation";

export interface IAuthenticate {
    email?:string;
    password?:string;
}

export function Login({navigation}:MenuStackTypes){
    const [data, setData] = useState<IAuthenticate>()
    async function handleSignIn(){
        if(data?.email && data.password){
            console.log(data)
        }else{
            Alert.alert("Preencha todos os cmpos!!!");
        }
    }
    function handleRegister(){
        navigation.navigate("Register")
    }
    function handleChange(item: IAuthenticate){
        setData({...data, ...item});
    }
    const confirm = require('../../assets/confirmar.png')
    const cancelar = require('../../assets/cancelar.png')
    return(
        <ComponentBackground2>
            <KeyboardAvoidingView style={styles.container}>
                <ComponentHeader/>
                <View style={styles.main}>
                    <View style={styles.window}>
                        <Text style={styles.title}>Login</Text>
                        <View>
                            <Text style={styles.text}>E-mail</Text>
                            <TextInput
                                keyboardType="email-address"
                                autoCapitalize="none"
                                onChangeText={(letter) => handleChange({email:letter})}>
                                <MaterialIcons name="email"/>
                            </TextInput>
                        </View>
                        <View>
                            <Text style={styles.text}>Senha</Text>
                            <TextInput
                                secureTextEntry={true}
                                autoCapitalize="none"
                                onChangeText={(letter) => handleChange({password:letter})}>
                                <Entypo name="key"/>
                            </TextInput>
                        </View>
                        <Text style={styles.text}>Não tem uma conta?</Text>
                        <TouchableOpacity onPress={() => handleRegister}><Text style={styles.link}>Crie uma!</Text></TouchableOpacity>
                        <View>
                            <TouchableOpacity><Image style={styles.image} source={confirm}/></TouchableOpacity>
                            <TouchableOpacity><Image style={styles.image} source={cancelar}/></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ComponentBackground2>
    )
}