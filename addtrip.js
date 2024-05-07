import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, TextInput, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
const AddTrip = () => {

  const navigation = useNavigation();
  const [destn, setDestination] = useState('');
  const [origin, setOrigin] = useState('');
  const [fromdate, setFromDate] = useState(new Date());
  const [todate, setToDate] = useState(new Date());
  const [showFromDatePicker, setShowFromDatePicker] = useState(false);
  const [showToDatepicker, setShowToDatepicker] = useState(false);

  const handleFromDateChange = (event, selectedDate) => {
    setShowFromDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setFromDate(selectedDate);
    }
  };

  const handleToDateChange = (event, selectedDate) => {
    setShowToDatepicker(Platform.OS === 'ios');
    if (selectedDate) {
      setToDate(selectedDate);
    }
  };

  // React Native AddTrip component

const handleAddTrip = async () => {
  const fromDateFormatted = new Date(fromdate).toISOString().slice(0, 19).replace('T', ' ');
  const toDateFormatted = new Date(todate).toISOString().slice(0, 19).replace('T', ' ');

   console.log("Add trip clicked");
        try {
          const response = await fetch('http://172.20.10.4:3000/addtrip', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              destn,
              origin,
              fromdate: fromDateFormatted, // Use the formatted date
              todate: toDateFormatted              
            })
          });
      
          if (!response.ok) {
            throw new Error('Failed to add trip');
          }
      
          // Reset form fields or navigate to another screen
          setDestination('');
          setOrigin('');
          // Reset other fields as needed
        } catch (error) {
          console.error('Error adding trip:', error);
          // Handle error (e.g., display error message to user)
        }
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
        <Text style={styles.headerText}>Add Trip</Text>
        <MaterialIcons name="account-circle" size={38} color="black" style={styles.profileIcon} />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.fieldContainer}>
          <MaterialIcons name="place" size={34} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Destination"
            value={destn}
            onChangeText={setDestination}
          />
        </View>
        <View style={styles.fieldContainer}>
          <MaterialIcons name="place" size={34} color="black" style={styles.icon} />
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
              value={fromdate}
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
              value={todate}
              mode="date"
              display="default"
              onChange={handleToDateChange}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.addButtonContainer}>
          <Button title="Add Trip" onPress={handleAddTrip} />
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
    marginLeft: 20,
    marginRight: 15,
    marginTop: 25,
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
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 18,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 1,
    borderColor: 'darkblue',
    paddingHorizontal: 25,
    paddingVertical: 12,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 20,
  },
  addButtonContainer: {
    marginTop: 20,
    alignSelf: 'center',
    width: '50%',
  },
});

export default AddTrip;
