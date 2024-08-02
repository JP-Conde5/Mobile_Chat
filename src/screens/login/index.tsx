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
            Alert.alert("Preencha todos os campos!!!");
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
                            <View style={styles.spaceWrite}>
                                <MaterialIcons name="email" size={20}/>
                                <TextInput
                                    style={styles.write}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    onChangeText={(letter) => handleChange({email:letter})}>
                                </TextInput>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.text}>Senha</Text>
                            <View style={styles.spaceWrite}>
                                <Entypo name="key" size={20}/>
                                <TextInput
                                    secureTextEntry={true}
                                    autoCapitalize="none"
                                    onChangeText={(letter) => handleChange({password:letter})}>
                                </TextInput>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.text}>Não tem uma conta?</Text>
                            <TouchableOpacity onPress={handleRegister}><Text style={styles.link}>Crie uma!</Text></TouchableOpacity>
                        </View>
                        <View style={styles.bottons}>
                            <TouchableOpacity onPress={handleSignIn}><Image style={styles.image} source={confirm}/></TouchableOpacity>
                            <TouchableOpacity><Image style={styles.image} source={cancelar}/></TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}/>
            </KeyboardAvoidingView>
        </ComponentBackground2>
    )
}