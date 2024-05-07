import React from 'react';
import { View,Image, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
    const navigation = useNavigation();
  const handleYourTrips = () => {
    // Navigate to Your Trips screen
    navigation.navigate('Triplist');
  };

  const handleAddTrip = () => {
    // Navigate to Add Trip screen
    navigation.navigate('AddTrip');
  };

  const handleSettings = () => {
    // Navigate to Settings screen
    console.log("Settings button pressed");
  };

  const handleCustomAction = () => {
    // Implement custom action for the additional button
    console.log("Logout button pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Home Page</Text>
        <MaterialIcons name="account-circle" size={38} color="black" style={styles.profileIcon} />
      </View>
      <Image source={require('/Users/swetha/Desktop/travelapp/mytravel/psgpsg.png')} style={styles.image} />
      <View style={styles.welcomeMessage}>
        <Text style={styles.welcomeText}>Welcome, Username!</Text>
      </View>
      <View style={styles.buttonRow}>
        <View style={styles.buttonColumn}>
          <TouchableOpacity style={styles.button} onPress={handleYourTrips}>
            <MaterialIcons name="flight-takeoff" size={34} color="white" />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Your Trips</Text>
        </View>
        <View style={styles.buttonColumn}>
          <TouchableOpacity style={styles.button} onPress={handleAddTrip}>
            <MaterialIcons name="add-circle" size={34} color="white" />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Add Trip</Text>
        </View>
      </View>
      <View style={styles.buttonRow}>
        <View style={styles.buttonColumn}>
          <TouchableOpacity style={styles.button} onPress={handleSettings}>
            <MaterialIcons name="settings" size={34} color="white" />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Settings</Text>
        </View>
        <View style={styles.buttonColumn}>
          <TouchableOpacity style={styles.button} onPress={handleCustomAction}>
            <MaterialIcons name="logout" size={34} color="white" />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Logout</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 25,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  profileIcon: {
    marginRight: 10,
    fontSize: 32,
  },
  welcomeMessage: {
    alignItems: 'flexend',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 30,
    marginLeft:20,
    fontWeight: 'bold',
    marginTop: 35,
    marginBottom: 35,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  buttonColumn: {
    flex: 1,
    alignItems: 'center',
  }, 
  image: {
    width: '100%', // Adjust width as needed
    height: 200, // Adjust height as needed
  },
  button: {
    width: '35%', // Adjust button width as needed
    backgroundColor: '#060646',
    borderRadius: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
  },
});
export default Home;