import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

// ICONS
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';  

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
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
          <Ionicons name="home-outline" size={25} color="white" style = {{alignSelf: 'center', marginBottom: 3}}/>
          <Text style = {{color: 'white', fontSize: 13}}>Home</Text>
        </View>

        <View style = {styles.navBarIcon}>
          <Ionicons name="search-outline" size={25} color="white" style = {{alignSelf: 'center', marginBottom: 3}}/>
          <Text style = {{color: 'white', fontSize: 13 }}>Search</Text>
        </View>

        <View style = {styles.navBarIcon}>
          <MaterialIcons name="my-library-music" size={25} color="white" style = {{alignSelf: 'center', marginBottom: 3}}/>
          <Text style = {{color: 'white', fontSize: 13}}>My library</Text>


        </View>
          


        </View>
      
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
    borderColor: 'red',
    borderWidth: 2
  },

  introGrouper: {
    flexDirection: 'row',
    // borderColor: 'blue',
    // borderWidth: 2,
    justifyContent: 'space-between',
    width: '100%',
  },

  iconsGrouper: {
    justifyContent: 'space-around'  ,
    // borderColor: 'red',
    // borderWidth: 2,
    flexDirection: 'row',
    width: '45%',
  },

  navBar: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around'

  },

  navBarIcon: {
    // borderColor: 'red',
    // borderWidth: 2,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
