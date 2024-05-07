import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '/Users/swetha/Desktop/travelapp/mytravel/src/components/home.js';
import Triplist from '/Users/swetha/Desktop/travelapp/mytravel/src/components/triplist.js';
import AddTrip from '/Users/swetha/Desktop/travelapp/mytravel/src/components/addtrip.js';
import EditTrip from '/Users/swetha/Desktop/travelapp/mytravel/src/components/edittrip.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Triplist" component={Triplist} />
        <Stack.Screen name="AddTrip" component={AddTrip} />
        <Stack.Screen name="EditTrip" component={EditTrip} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
