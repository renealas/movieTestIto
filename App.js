import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { StyleSheet, Text, View } from 'react-native';

//Navigation
import AppNavigator from "./navigation/AppNavigation";
import MovieNavigator from "./navigation/MovieNavigator";

//Reducer
import moviesReducer from './store/reducers/movie';
import authReducer from './store/reducers/auth';

const rootReducer = combineReducers({
  movies: moviesReducer,
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <MovieNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
