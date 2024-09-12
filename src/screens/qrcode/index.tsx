import React from "react";
import {BarcodeScanningResult, CameraView, useCameraPermissions } from "expo-camera";
import { useAuth } from "../../hook/index";
import { useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { ComponentLoading } from "../../components";
import { styles } from "./style";

export function QrCode(){
    const { user } = useAuth()
    const [scanned, setScanned] = useState(false)
    const [permission, requestPermission] = useCameraPermissions()
    if(!permission){
        return(
            <ComponentLoading/>
        )
    }else if(!permission.granted){
        return(
            <View style={styles.container}>
                <Text>Você precisa dar acesso a câmera</Text>
                <TouchableOpacity onPress={requestPermission}><Text>Permitir</Text></TouchableOpacity>
            </View>
        )
    }
    function handleBarcodeScanner({data}: BarcodeScanningResult){
        Alert.alert(`Olá ${data}`)
        setScanned(true)
    }
    return(
        <View style={styles.container}>
            {user && user.user.name && (
                <Image source={{uri: `https://image-charts.com/chart?chs=500x500&cht=qr&chl=${user.user.name}&choe=UTF-8`}}/>
            )}
            {!scanned ? (
                <CameraView 
                    barcodeScannerSettings={{barcodeTypes: ['qr']}}
                    onBarcodeScanned={handleBarcodeScanner}
                    style={styles.cam}
                />
            ) : (
                <TouchableOpacity onPress={() => setScanned(false)}>
                    <Text>Scanear novamente</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}  