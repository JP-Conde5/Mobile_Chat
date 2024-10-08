import { CameraView, CameraType, useCameraPermissions, CameraCapturedPicture } from "expo-camera";
import { useRef, useState } from "react"
import { Text, View, TouchableOpacity, Alert, ImageBackground, Image } from 'react-native'
import * as MediaLibrary from "expo-media-library"
import { ComponentBackground2, ComponentHeader, ComponentLoading } from "../../components";
import { styles } from "./style"

export function Cam(){
    const [side, setSide] = useState<CameraType>('back')
    const [permission, requestPermission] = useCameraPermissions()
    const [permissionMedia, requestPermissionMedia] = MediaLibrary.usePermissions()
    const [photo, setPhoto] = useState<CameraCapturedPicture>()
    const refCamView = useRef<CameraView>(null)
    
    if(!permission){
        return <ComponentLoading/>
    }
    
    if(!permission.granted){
        return (
            <ComponentBackground2>
            <View style={styles.windowPermission}>
            <ComponentHeader/>

                <Text style={styles.text}>Você precisa dar permissãoa à câmera</Text>
                <TouchableOpacity style={styles.button} onPress={requestPermission}><Text>Permitir</Text></TouchableOpacity>
            </View>
            </ComponentBackground2>
        )
    }

    function toogleCameraSide(){
        setSide(current => (current == 'back' ? 'front' : 'back'))
    }

    async function takePicture(){
        if(refCamView.current){
            const picture = await refCamView.current.takePictureAsync({ imageType: 'jpg', quality: 0})
            setPhoto(picture)
        }
    }

    async function savePhoto(){
        if(permissionMedia!.status == 'granted'){
            await requestPermissionMedia()
        }
        const asset = await MediaLibrary.createAssetAsync(photo!.uri)
        MediaLibrary.createAlbumAsync("Images", asset, false)
        Alert.alert("Imagem salva com sucesso")        
    }

    if(photo){
        const save = require("../../assets/download.png")
        const cancel = require("../../assets/cancelar.png")
        return(
            <>                
            <ComponentHeader/>
            <ImageBackground style={styles.container} source={{uri: photo.uri}}>
                <View style={styles.footerPhoto}>
                    <TouchableOpacity onPress={savePhoto}>
                        <Image style={styles.imageIcon} source={save}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setPhoto(undefined)}>
                        <Image style={styles.imageIcon} source={cancel} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            </>
        )
    }

    const thread = require("../../assets/thread.png")
    return(
        <View style={styles.container}>
            <ComponentHeader/>
            <CameraView style={styles.camera} facing={side} ref={refCamView}>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={toogleCameraSide}>
                        <Image style={styles.image} source={thread}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ball} onPress={takePicture}/>
                </View>
            </CameraView>
        </View>
    )
}