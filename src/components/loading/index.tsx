import LottieView from "lottie-react-native";

export function Loading(){
    return(
        <LottieView 
        source={require('../../lottie/gifLoading.json')}
        style={{width:'100%', height: '100%'}}
        autoPlay
        loop
        />
    )
}