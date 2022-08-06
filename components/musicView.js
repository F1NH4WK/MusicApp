import { Text, Pressable, View, Image } from "react-native";

export default function MusicView(props){
    return(
        <View style = {props.style}>
        <Pressable onPress={() => props.tocar()}>
            <Image source = {{uri: 'https://picsum.photos/200/300?random=' +  Math.random()*500}} 
            style = { {width: 130, height: 130, borderRadius: 10, marginBottom: 10}} />
            <Text style = {{fontWeight: 'bold'}}>{props.nome}</Text>
        </Pressable>
        <Text style = {{color: 'gray'}}>{props.cantor}</Text>
        </View>
    )
}