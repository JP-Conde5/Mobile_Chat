import React from "react";
import {BarcodeScanningResult, CameraView, useCameraPermissions } from "expo-camera";
import { useAuth } from "../../hook/index";
import { useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { ComponentBackground2, ComponentHeader, ComponentLoading } from "../../components";
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
            <ComponentBackground2>
            <ComponentHeader/>
            <View style={styles.windowPermission}>
                <Text style={styles.text}>Você precisa dar permissãoa à câmera</Text>
                <TouchableOpacity style={styles.button} onPress={requestPermission}><Text>Permitir</Text></TouchableOpacity>
            </View>
            </ComponentBackground2>
        )
    }
    function handleBarcodeScanner({data}: BarcodeScanningResult){
        Alert.alert(`Deseja se tornar amigo ${data}`)
        setScanned(true)
    }
    if(scanned){
        return(
            <ComponentBackground2>
                <ComponentHeader/>
                {user && user.user.name && (
                    <Image style={styles.qrcode} source={{uri: `https://image-charts.com/chart?chs=500x500&cht=qr&chl=${user.user.name}&choe=UTF-8`}}/>
                 )}
                <TouchableOpacity style={styles.button} onPress={() => setScanned(false)}>
                    <Text style={styles.text}>Scanear novamente</Text>
                </TouchableOpacity>
            </ComponentBackground2>
        )
    }
    return(
        <ComponentBackground2>
            <ComponentHeader/>
            {user && user.user.name && (
                <Image style={styles.qrcode} source={{uri: `https://image-charts.com/chart?chs=500x500&cht=qr&chl=${user.user.name}&choe=UTF-8`}}/>
            )}
            <CameraView 
                barcodeScannerSettings={{barcodeTypes: ['qr']}}
                onBarcodeScanned={handleBarcodeScanner}
                style={styles.cam}
            /> 
        </ComponentBackground2>
    )
}  