import React from 'react'
import {useEffect, useState} from 'react'
import {IResponseMessage} from '../../services/data/Message'
import { useAuth } from '../../hook'
import { apiMessage } from '../../services/data'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { ComponentBackground2, ComponentHeader } from '../../components'
import { MessageTypes } from '../../navigation/message.navigation'
import { styles } from './style'

export function ListMessage({navigation}:MessageTypes){
    const [message, setMessage] = useState<IResponseMessage[]>([])
    const { setLoading } = useAuth()
    useEffect(() => {
        setLoading(true)
        async function loadMessage(){
            const response = await apiMessage.index()
            setMessage(response.data)
        }
        setLoading(false)
        navigation.addListener("focus", () => loadMessage())
    }, [])
    interface itemMessage{
        item: IResponseMessage
    }
    const renderItem = (({item}:itemMessage) => {
        return(
            <View style={styles.item}>
                <Text style={styles.name}>{item.user.name}</Text>
                <Text style={styles.message}>{item.message}</Text>
            </View>
        )
    })
    function handleCadMessage(){
        navigation.navigate('CadMessage')
    }
    const cad = require("../../assets/plus.png") 
    return(
        <ComponentBackground2>
            <View style={styles.container}>
                <ComponentHeader/>
                <View>
                {
                    message.length > 0 && (
                        <FlatList
                            data={message}
                            renderItem={renderItem}
                            keyExtractor={(item)=>String(item.id)}
                        />
                    )
                }
                </View>
                <TouchableOpacity style={styles.button} onPress={() => handleCadMessage()}><Image style={styles.image} source={cad}/></TouchableOpacity>
            </View>
        </ComponentBackground2>
    )
}