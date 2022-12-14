import { View, Text, Image, Pressable } from "react-native";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from "react";

export default function DisplayMusic(props){

    const [playing, setPlaying] = useState(true)

    return(
        <View style = {props.style}>
            <Image source={{uri: 'https://picsum.photos/200/300'}} 
            style = {{ width: 40, height: 40, borderRadius: 10 }}/>

            <View style = {{flexDirection: 'column', width: '30%', justifyContent: 'flex-start'}}>
                <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 15}}>{props.musica}</Text>
                <Text style = {{color: 'gray', fontSize: 13}}>{props.singer}</Text>
            </View>

            <View style = {{
            flexDirection: 'row', 
            justifyContent: 'space-evenly', 
            width: '40%'}}>
                <MaterialCommunityIcons name="devices" size={24} color="white" />
                <Ionicons name="md-heart-outline" size={24} color="white" />
                {playing?
                <Pressable onPress={() => {props.tocar(false); setPlaying(false)}}>
                    <Ionicons name="pause" size={24} color="black" />
                </Pressable>
                :
                <Pressable onPress={() => {props.tocar(true); setPlaying(true)}}>
                    <Ionicons name="play" size={24} color="black" />
                </Pressable>
                
                }
            </View>
        </View>
    )
}