import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';
import { useState } from 'react';

// ICONS
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';  

// LOCAL IMPORTS
import DisplayMusic from './components/displayMusic';

function RenderRecent(){
  return(
    <View style = {styles.recentMusicsStyle}>

    </View>
  )
}


export default function App() {

  const test = [1,2,3]
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />

        {/* THE TOP VIEW */}
        <View style = {styles.introGrouper}>
          <Text style = {{color: 'white', alignSelf: 'center', fontSize: 24, fontWeight: '700'}}>
            Good afternoon</Text>

          <View style = {styles.iconsGrouper}>
            <Ionicons name="notifications-outline" size={27} color="white" />
            <MaterialCommunityIcons name="progress-clock" size={27} color="white" />
            <Ionicons name="md-settings-outline" size={27} color="white" />
          </View>
        </View>

        <View style = {styles.topSongs}>
          <View style = {styles.topSongsStyle}>
            <Image source = {{uri: 'https://picsum.photos/200/300'}} style = {
                  {width: 50, height: 50, borderRadius: 10}} />
            <Text>Playlist 1</Text>
          </View>

          <View style = {styles.topSongsStyle}>
            <Image source = {{uri: 'https://picsum.photos/200/300'}} style = {
                  {width: 50, height: 50, borderRadius: 10}} />
            <Text>Playlist 1</Text>
          </View>

          <View style = {styles.topSongsStyle}>
            <Image source = {{uri: 'https://picsum.photos/200/300'}} style = {
                  {width: 50, height: 50, borderRadius: 10}} />
            <Text>Playlist 1</Text>
          </View>
          
          <View style = {styles.topSongsStyle}>
            <Image source = {{uri: 'https://picsum.photos/200/300'}} style = {
                  {width: 50, height: 50, borderRadius: 10}} />
            <Text>Playlist 1</Text>
          </View>

          <View style = {styles.topSongsStyle}>
            <Image source = {{uri: 'https://picsum.photos/200/300'}} style = {
                  {width: 50, height: 50, borderRadius: 10}} />
            <Text>Playlist 1</Text>
          </View>

          <View style = {styles.topSongsStyle}>
            <Image source = {{uri: 'https://picsum.photos/200/300'}} style = {
                  {width: 50, height: 50, borderRadius: 10}} />
            <Text>Playlist 1</Text>
          </View>
        </View> 

        {/* LAST VIEWED */}

        <Text style = {{alignSelf: 'flex-start', fontWeight: '700', fontSize: 24 }}>Jump back in</Text>
        <View style = {styles.recentMusicsView}>
          <FlatList 
          data={test}
          renderItem={(item) => <RenderRecent/>}/>
        </View>

        <Text style = {{alignSelf: 'flex-start', fontWeight: '700', fontSize: 24 }}>Your top mixes</Text>


        {/* HERE'S THE NAVBAR, PRETTY SIMPLE, BUT I LOVED IT :) */}

        <View style = {styles.navBar}>
          <View style = {styles.navBarIcon}>
            <Ionicons name="home-outline" size={22} color="white" style = {{alignSelf: 'center', marginBottom: 3}}/>
            <Text style = {{color: 'white', fontSize: 12}}>Home</Text>
          </View>

          <View style = {styles.navBarIcon}>
            <Ionicons name="search-outline" size={22} color="white" style = {{alignSelf: 'center', marginBottom: 3}}/>
            <Text style = {{color: 'white', fontSize: 12 }}>Search</Text>
          </View>

          <View style = {styles.navBarIcon}>
            <MaterialIcons name="my-library-music" size={22} color="white" style = {{alignSelf: 'center', marginBottom: 3}}/>
            <Text style = {{color: 'white', fontSize: 12}}>My library</Text>
          </View>
        </View>
       
      
      <DisplayMusic style = {styles}/>
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
    marginBottom: 15,
  },

  iconsGrouper: {
    justifyContent: 'space-evenly'  ,
    flexDirection: 'row',
    width: '45%',
  },

  navBar: {
    position: 'absolute',
    bottom: 15,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly'

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
    borderRadius: 10
    },

    topSongs: {
      // borderColor: 'red',
      // borderWidth: 2,
      height: '30%',
      width: '100%',
      maxWidth: '105%',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginBottom: 5,
    },

    topSongsStyle: {
      // borderColor: 'blue',
      // borderWidth: 2,
      height: '30%',
      width: '46%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },

    recentMusicsView: {
      borderColor: 'red',
      borderWidth: 2,
      height: '30%',
      width: '100%',
      flexDirection: 'row',
      marginBottom: 18,
      padding: 7,
    },

    recentMusicsStyle: {
      borderColor: 'blue',
      borderWidth: 2,
      height: '100%',
      width: '30%'

    }
  }
);
