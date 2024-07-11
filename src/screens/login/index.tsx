import { ComponentBackground2, ComponentHeader } from "../../components";
import { KeyboardAvoidingView, View, Text, TextInput, Alert } from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { styles } from "./style";
import { useState } from "react";

export interface IAuthenticate {
    email?:string;
    password?:string;
}

export function Login({ navigation }: LoginTypes){
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
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView>

            </KeyboardAvoidingView>
        </View>
    )
}