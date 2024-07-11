import { View, ImageBackground } from 'react-native';
import { styles } from './style'

export interface IBackground{
    children: React.ReactNode
}

export function Background1({children}:IBackground){
    const background = require('../../assets/back1.png')
    return(
        <ImageBackground style={styles.container} source={background}>
            <View style={styles.background}>
                {children}
            </View>
        </ImageBackground>            
    );
}

