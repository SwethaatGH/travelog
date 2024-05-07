import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Triplist = () => {
  const navigation = useNavigation();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const response = await fetch('http://172.20.10.4:3000/trips');
      if (!response.ok) {
        throw new Error('Failed to fetch trips');
      }
      const data = await response.json();
      // Map the data to include only required fields
      const formattedTrips = data.map(item => ({
        origin: item.origin,
        destn: item.destn,
        fromdate: item.fromdate,
        todate: item.todate
      }));
      setTrips(formattedTrips);
    } catch (error) {
      console.error('Error fetching trips:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.tripItem}>
      <Text style={styles.tripTitle}>{item.destn}</Text>
      <Text style={styles.tripDate}>{item.fromdate}</Text>
    </View>
  );  

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <MaterialIcons name="arrow-back" size={30} color="black" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Your Trips</Text>
        <MaterialIcons name="account-circle" size={38} color="black" style={styles.profileIcon} />
      </View>
      <FlatList
        data={trips}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
    marginLeft: 20,
    marginRight: 15,
    marginTop: 25
  },
  backIcon: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  profileIcon: {
    marginRight: 10,
    fontSize: 32,
  },
  tripItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    borderRadius: 10,
    backgroundColor: '#D7E9FF',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 25
  },
  tripTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black'
  },
  tripDate: {
    fontSize: 16,
    color: 'black',
  },
  tripStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Triplist;
