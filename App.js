import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, 
  Image, FlatList, ScrollView, Pressable } from 'react-native';

import { useState } from 'react';
import { Audio } from 'expo-av';

// ICONS
import { 
  MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';

// LOCAL IMPORTS
import DisplayMusic from './components/displayMusic';
import MusicView from './components/musicView';

export default function App() {

  const [musica, setMusica] = useState()

  const [musics, setMusics] = useState([{
    musicName: 'Dirmouth',
    singer: 'Hollow Knight',
    playing: false,
    file: require('./music/Dirtmouth.mp3')
  },
  {
    musicName: 'Hornet',
    singer: 'Hollow Knight',
    playing: false,
    file: require('./music/Hornet.mp3')
  },

  {
    musicName: "Mantis Lorids",
    singer: "Hollow Knight",
    playing: false,
    file: require('./music/MantisLordis.mp3'),
  }
    ])

  const test = ["limitless", "nome2", "nome3", "nome4", 'nom5', 'nom6']

  Audio.requestPermissionsAsync();

  async function playSound(position){
    musica == null? null: musica.unloadAsync();
    console.log("Playing audio")
    const {sound} = await Audio.Sound.createAsync(musics[position].file)
    setMusica(sound);
    await sound.playAsync();
  }

  const playMusic = choice => {
    setMusica(musics.map((i, index) => 
    index == choice? i.playing = true : i.playing = false
    )); playSound(choice)}

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <ScrollView showsVerticalScrollIndicator = {false}>

        {/* THE TOP VIEW */}
        <View style = {styles.introGrouper}>
          <Text  style = {{color: 'white', alignSelf: 'center', fontSize: 24, fontWeight: '700'}}>
            Good afternoon</Text>

          <View style = {styles.iconsGrouper}>
            <Ionicons name="notifications-outline" size={27} color="white" />
            <MaterialCommunityIcons name="progress-clock" size={27} color="white" />
            <Ionicons name="md-settings-outline" size={27} color="white" />
          </View>
        </View>

        <View style = {styles.topSongs}>
          {test.map((i) =>  
          <Pressable onPress={() => alert('Clicked')}> 
            <View style = {styles.topSongsStyle}>
              <Image source = {{uri: 'https://picsum.photos/200/300?random=' + Math.random()*500}} style = {
                    {width: 50, height: 50, borderRadius: 10}} />
              <Text>{i}</Text>
            </View>
          </Pressable>
          )}
        </View> 

        {/* LAST VIEWED */}

          <Text style = {{alignSelf: 'flex-start', fontWeight: '700', fontSize: 24 }}>Jump back in</Text>
          <View style = {styles.recentMusicsView}>
            <FlatList 
            data={musics}
            renderItem={(item) => <MusicView style = {styles.recentMusicsStyle}
            nome = {item.item.musicName} cantor = {item.item.singer} 
            index = {item.index} tocar = {() => playMusic(item.index)}/>}
            horizontal = {true}
            showsHorizontalScrollIndicator = {false}/>
          </View>

        <Text style = {{alignSelf: 'flex-start', fontWeight: '700', fontSize: 24 }}>Your top mixes</Text>
        <View style = {styles.recentMusicsView}>
          <FlatList 
          data={test}
          renderItem={(item) => <MusicView nome = {item.item} 
          style = {styles.recentMusicsStyle}/>}
          horizontal = {true}
          showsHorizontalScrollIndicator = {false}/>
        </View>
        </ScrollView>

        {/* HERE'S THE NAVBAR, PRETTY SIMPLE, BUT I LOVED IT :) */}
        

        <View style = {styles.navBar}>
          <View style = {styles.navBarIcon}>
            <Ionicons name="home-outline" size={27} color="white" style = {{alignSelf: 'center', marginBottom: 3}}/>
            <Text style = {{color: 'white', fontSize: 12}}>Home</Text>
          </View>

          <View style = {styles.navBarIcon}>
            <Ionicons name="search-outline" size={27} color="white" style = {{alignSelf: 'center', marginBottom: 3}}/>
            <Text style = {{color: 'white', fontSize: 12 }}>Search</Text>
          </View>

          <View style = {styles.navBarIcon}>
            <MaterialIcons name="my-library-music" size={27} color="white" style = {{alignSelf: 'center', marginBottom: 3}}/>
            <Text style = {{color: 'white', fontSize: 12}}>My library</Text>
          </View>
        </View>      
        {musics.map(val => 
        val.playing?
        <DisplayMusic style = {styles.displayMusicGrouper} 
        musica = {val.musicName} singer = {val.singer}/>
        :
        null)}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    paddingTop: 50,
    paddingLeft: 12,
    paddingRight: 12,
  },

  introGrouper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 4,
  },

  iconsGrouper: {
    justifyContent: 'space-evenly'  ,
    flexDirection: 'row',
    width: '45%',
  },

  navBar: {
    position: 'absolute',
    bottom: 0,
    paddingVertical: 15,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    backgroundColor: '#141414',
    opacity: 0.95
  },

  navBarIcon: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  displayMusicGrouper: {
    flexDirection: 'row', 
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '8%',
    bottom: 70,
    position: 'absolute',
    backgroundColor: '#fefcfb',
    borderRadius: 10,
    },

    topSongs: {
      height: '25%',
      width: '100%',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginBottom: 5,
      paddingVertical: 10
    },

    topSongsStyle: {
      // borderColor: 'blue',
      // borderWidth: 2,
      width: '45%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: '#141414',
      borderRadius: 10,
      padding: 3,
      marginRight: 8,
    },

    recentMusicsView: {
      // borderColor: 'red',
      // borderWidth: 2,
      height: '30%',
      width: '100%',
      flexDirection: 'row',
      padding: 7,
      alignItems: 'center'
    },

    recentMusicsStyle: {
      // borderColor: 'blue',
      // borderWidth: 2,
      marginRight: 25

    }
  }
);
