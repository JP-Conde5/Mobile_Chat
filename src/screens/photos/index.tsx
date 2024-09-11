import { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import * as MediaLibary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import { ComponentAlbum } from "../../components";
import { styles } from './style';

export function Photos(){
    const [albums, setAlbums] = useState<MediaLibary.Album[] | null>()
    const [permissionResponse, requestPermission] = MediaLibary.usePermissions()
    const [image, setImage] = useState<string | null>(null);
    async function getAlbums(){
        if(permissionResponse && permissionResponse.status !== 'granted' && permissionResponse.accessPrivileges !== 'all'){
            await requestPermission()
        }
        const fetchedAlbums = await MediaLibary.getAlbumsAsync({
            includeSmartAlbums: true
        })
        setAlbums(fetchedAlbums)
    }
    async function pickImage(){
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
        })
        if(!result.canceled){
            setImage(result.assets[0].uri)
        }
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={pickImage}><Text>Abrir Imagem</Text></TouchableOpacity>
            <View>
                {image && <Image source={{uri: image}}/>}
            </View>
            <TouchableOpacity onPress={getAlbums}><Text>Buscar Albuns</Text></TouchableOpacity>
            <ScrollView>
                {albums && albums.map((album) => <ComponentAlbum album={album}/>)}
            </ScrollView>
        </View>
    
    )
}