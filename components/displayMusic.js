import { StyleSheet, View, Text, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function DisplayMusic(props){
    return(
        <View style = {{
            flexDirection: 'row', 
            borderColor: 'blue', 
            borderWidth: 1,
            width: '100%',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '7%',
            bottom: 100,
            position: 'absolute'}}>
            <Image source={{uri: 'https://picsum.photos/200/300'}} style = {{width: 45, height: 45}}/>

            <View style = {{
            borderColor: 'red', 
            borderWidth: 1,
            flexDirection: 'column'}}>

                <Text>The Real Slim Shady</Text>
                <Text>Eminen</Text>
            </View>

            <View style = {{
            flexDirection: 'row', 
            justifyContent: 'space-evenly', 
            width: '35%'}}>
                <MaterialCommunityIcons name="devices" size={24} color="white" />
                <Ionicons name="md-heart-outline" size={24} color="white" />
                <Ionicons name="play" size={24} color="white" />
            </View>
        </View>
    )
}