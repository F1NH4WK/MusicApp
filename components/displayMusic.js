import { StyleSheet, View, Text, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function DisplayMusic(props){

    const styles = props.style

    return(
        <View style = {styles.displayMusicGrouper}>
            <Image source={{uri: 'https://picsum.photos/200/300'}} style = {
                {width: 40, height: 40, borderRadius: 10}}/>

            <View style = {{
            flexDirection: 'column',
            maxWidth: '55%'}}>

                <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 14}}>Woman 	• Doja Cat</Text>
            </View>

            <View style = {{
            flexDirection: 'row', 
            justifyContent: 'space-evenly', 
            width: '40%'}}>
                <MaterialCommunityIcons name="devices" size={24} color="white" />
                <Ionicons name="md-heart-outline" size={24} color="white" />
                <Ionicons name="play" size={24} color="white" />
            </View>
        </View>
    )
}