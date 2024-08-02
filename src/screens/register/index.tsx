import { useState } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Alert, TouchableOpacity, Image} from 'react-native';
import { MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { Background2 } from '../../components/background2';
import { MenuStackTypes } from '../../navigation/MenuStack.navigation';
import { styles } from './style';
import { ComponentHeader } from '../../components'
export interface IRegister{
    name?:string
    email?:string
    password?:string   
}

export function Register({ navigation }: MenuStackTypes){
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
    const confirm = require('../../assets/confirmar.png')
    const cancelar = require('../../assets/cancelar.png')
    return(
        <Background2>
            <KeyboardAvoidingView style={styles.container}>
                <ComponentHeader/>
                <View style={styles.main}>
                    <View style={styles.window}>
                        <Text style={styles.title}>Cadastrar-se</Text>
                        <View>
                            <Text style={styles.text}>Nome</Text>
                            <View style={styles.spaceWrite}>
                                <Ionicons name="person" size={20}/>
                                <TextInput
                                    style={styles.write}
                                    onChangeText={(letter) => handleChange({name:letter})}>
                                </TextInput>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.text}>E-mail</Text>
                            <View style={styles.spaceWrite}>
                                <MaterialIcons name="email" size={20}/>
                                <TextInput
                                    style={styles.write}
                                    autoCapitalize='none'
                                    keyboardType='email-address'
                                    onChangeText={(letter) => handleChange({name:letter})}>
                                </TextInput>
                            </View>
                        </View>
                        <View>    
                            <Text style={styles.text}>Senha</Text>
                            <View style={styles.spaceWrite}>
                                <Entypo name='key' size={20}/>
                                <TextInput
                                    style={styles.write}
                                    secureTextEntry={true}
                                    autoCapitalize='none'
                                    onChangeText={(letter) => handleChange({password:letter})}>   
                                </TextInput>
                            </View>
                        </View>
                        <View style={styles.bottons}>
                            <TouchableOpacity onPress={handleRegister}><Image style={styles.image} source={confirm}/></TouchableOpacity>
                            <TouchableOpacity onPress={handleGoBack}><Image style={styles.image} source={cancelar}/></TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}/>
            </KeyboardAvoidingView>
        </Background2>
    )
}