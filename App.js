import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

// ICONS
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';  


// LOCAL IMPORTS
import DisplayMusic from './components/displayMusic';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* THE TOP VIEW */}
      <View style = {styles.introGrouper}>
        <Text style = {{color: 'white', alignSelf: 'center', fontSize: 24, fontWeight: '700'}}>
          Good afternoon</Text>

        <View style = {styles.iconsGrouper}>
          <Ionicons name="notifications-outline" size={30} color="white" />
          <MaterialCommunityIcons name="progress-clock" size={30} color="white" />
          <Ionicons name="md-settings-outline" size={30} color="white" />
        </View>



      </View>

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
  },

  iconsGrouper: {
    justifyContent: 'space-around'  ,
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
  }
);
