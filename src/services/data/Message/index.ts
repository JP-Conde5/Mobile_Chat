import {api} from '../../api'

export interface IMessage{
    message?: string
    title?: string
}

export interface IResponseMessage{
    id: number
    user_id: number
    title: string
    message: string
    create_at: string
    user:{
        id:number
        name:string
        email:string
    }
} 

class MessageData{
    index(){
        return api.get<IResponseMessage[]>('/message')
    }
    store(data: IMessage){
        return api.post('/message', data)
    }
}

export default new MessageData()