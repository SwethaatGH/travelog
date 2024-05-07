import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, TextInput, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

const EditTrip = ({ route }) => 
{
const { tripName } = route.params;
const navigation = useNavigation();
  const [destination, setDestination] = useState('');
  const [origin, setOrigin] = useState('');
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showFromDatePicker, setShowFromDatePicker] = useState(false);
  const [showToDatepicker, setShowToDatepicker] = useState(false);

  const handleFromDateChange = (event, selectedDate) => {
    setShowFromDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setFromDate(selectedDate);
    }
  };
  const truncateTitle = (title) => {
    const maxLength = 20;
    return title.length > maxLength ? `${title.substring(0, maxLength)}...` : title;
  };
  const handleToDateChange = (event, selectedDate) => {
    setShowToDatepicker(Platform.OS === 'ios');
    if (selectedDate) {
      setToDate(selectedDate);
    }
  };

  const handleDeleteTrip = () => {
    // Here you can perform the action to delete the trip
    // For now, I'm just logging the deletion action
    console.log("Trip deleted");
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <MaterialIcons name="arrow-back" size={30} color="black" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Edit Trip</Text>
        <MaterialIcons name="account-circle" size={38} color="black" style={styles.profileIcon} />
      </View>
      <View style={styles.body}>
        {/* Display trip name */}
        <View style={styles.tripdetails}>
        <Text style={styles.tripname1}>{truncateTitle(tripName)}</Text>
          {/* Display trip status with colored circle */}
          <View style={styles.statusContainer}>
            <View style={[styles.statusCircle, { backgroundColor: 'red' }]}></View>
            <Text style={styles.tripStatus}>Pending</Text>
          </View>
        </View>
        {/* Editable fields */}
        <View style={styles.fieldContainer}>
          <MaterialIcons name="place" size={30} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Destination"
            value={destination}
            onChangeText={setDestination}
          />
        </View>
        <View style={styles.fieldContainer}>
          <MaterialIcons name="place" size={30} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Origin"
            value={origin}
            onChangeText={setOrigin}
          />
        </View>
        <View style={styles.fieldContainer}>
          <MaterialIcons name="date-range" size={34} color="black" style={styles.icon} />
          <TouchableOpacity onPress={() => setShowFromDatePicker(true)}>
            <DateTimePicker
              value={fromDate}
              mode="date"
              display="default"
              onChange={handleFromDateChange}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.fieldContainer}>
          <MaterialIcons name="date-range" size={34} color="black" style={styles.icon} />
          <TouchableOpacity onPress={() => setShowToDatepicker(true)}>
            <DateTimePicker
              value={toDate}
              mode="date"
              display="default"
              onChange={handleToDateChange}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Delete trip button */}
      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteTrip}>
        <MaterialIcons name="delete" size={30} color="white" />
        <Text style={styles.deleteButtonText}>Delete Trip</Text>
      </TouchableOpacity>
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
    marginTop: 25,
  },
  tripdetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backIcon: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  tripname1:{
    fontSize: 23,
    marginLeft:30,
    fontWeight: 'bold',
  },
  profileIcon: {
    marginRight: 10,
    fontSize: 32,
  },
  body: {
    flex: 1,
  },
  tripName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft:30
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  statusCircle: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    marginRight: 10,
  },
  tripStatus: {
    fontSize: 18,
    marginRight:30
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 18,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 25,
    paddingVertical: 18,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default EditTrip;
