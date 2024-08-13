import {useEffect, useState} from 'react'
import {IResponseMessage} from '../../services/data/Message'
import { useAuth } from '../../hook'
import { apiMessage } from '../../services/data'
import { View, Text, KeyboardAvoidingView, TextInput } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Background2 } from '../../components/background2'
import { ComponentBackground2, ComponentHeader } from '../../components'

export function listMessage(){
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
            </KeyboardAvoidingView>
            <View/>
        </ComponentBackground2>
    )
}