import { useEffect, useState } from "react";
import *  as MediaLibrary from "expo-media-library";
import { Image, Text, View } from "react-native";
import {styles} from "./style"

interface IAlbum{
    album: MediaLibrary.Album
}

export function Album({ album }: IAlbum){
    const [assets, setAssets] = useState<MediaLibrary.Asset[]>([]);
    useEffect(() => {
        async function getAlbumAssets(){
            const albumAssets = await MediaLibrary.getAssetsAsync({album});
            setAssets(albumAssets.assets)
        }
        getAlbumAssets();
    }, [album]);
    return(
        <View style={styles.albums} key={album.id}>
            <Text style={styles.title}>
                {album.title} - {album.assetCount ?? 'no'} fotos
            </Text>
            <View style={styles.album}>
                {assets && assets.map((asset) => (
                    <Image style={styles.image} source={{uri:asset.uri}} width={50} height={50}/>
                ))}
            </View>
        </View>
    )
}