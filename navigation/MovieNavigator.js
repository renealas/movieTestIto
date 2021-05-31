import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//import Screens
import Home, { screenOptions as homeScreenOptions } from "../screens/Home";
import MovieDetailScreen, {screenOptions as movieDetailScreenOptions} from "../screens/MovieDetail";
import LoginScreen from "../screens/LoginScreen";

//Opciones de Navegacion Color de Header
const defaultNavOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? 'blue' : ''
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitleAlign: 'center',
    headerTintColor: Platform.OS === 'android' ? 'white' : 'blue'
};

//Stack of Movie Details

const MovieStackNavigator = createStackNavigator();

export const MovieNavigator = () => {
    return (
      <MovieStackNavigator.Navigator screenOptions={defaultNavOptions}>
          <MovieStackNavigator.screen 
              name="Home"
              component={Home}
              options={homeScreenOptions}
          />
          <MovieStackNavigator.screen 
              name="MovieDetail"
              component={MovieDetailScreen}
              options={movieDetailScreenOptions}
          />
      </MovieStackNavigator.Navigator>
    );
};

  
// Stack de Autenticacion con 1 Pantalla

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AuthStackNavigator.Screen
        name="Auth"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </AuthStackNavigator.Navigator>
  );
};
 
  