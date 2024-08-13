import {useEffect, useState} from 'react'
import {IResponseMessage} from '../../services/data/Message'
import { useAuth } from '../../hook'
import { apiMessage } from '../../services/data'
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Background2 } from '../../components/background2'
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
        loadMessage()
    }, [])
    interface itemMessage{
        item: IResponseMessage
    }
    const renderItem = (({item}:itemMessage) => {
        return(
            <View>
                <Text>{item.message}</Text>
            </View>
        )
    })
    function handleCadMessage(){
        navigation.navigate('CadMessage')
    }
    return(
        <ComponentBackground2>
            <KeyboardAvoidingView>
                <ComponentHeader/>
                {
                    message.length > 0 && (
                        <FlatList
                            data={message}
                            renderItem={renderItem}
                            keyExtractor={(item)=>String(item.id)}
                        />
                    )
                }
            <TouchableOpacity style={styles.button} onPress={handleCadMessage}></TouchableOpacity>
            </KeyboardAvoidingView>
            <View/>
        </ComponentBackground2>
    )
}