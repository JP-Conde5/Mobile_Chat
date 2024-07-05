import { View, ImageBackground } from 'react-native';
import { styles } from './style'

interface IBackground{
    children: React.ReactNode
}

export function Background({children}:IBackground){
    const background = require('../../assets/back.png')
    return(
        <ImageBackground style={styles.container} source={background}>
            <View style={styles.background}>
                {children}
            </View>
        </ImageBackground>            
    );
}

