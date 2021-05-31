import React, {useState,useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';
//import { useDispatch } from 'react-redux';

import FormInput from '../components/UI/FormInput';
import FormButton from '../components/UI/FormButton';
//import * as authActions from '../store/actions/auth';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    //const dispatch = useDispatch();

    // const LoginHandler = useCallback ( async (email, password) => {
    //   setError(null);
    //     setIsLoading(true);
    //     try {
    //         await dispatch(authActions.login(email,password));
    //         //props.navigation.navigate('Shop');
    //     } catch (err) {
    //         setError(err.message);
    //         setIsLoading(false);
    //     }
    // }, [dispatch, setEmail, setPassword]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/descarga.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>My Movie App</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Log In"
        //onPress={() => LoginHandler(email, password)}
        onPress={()=>{}}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>        
        <Text style={styles.navButtonText}>Forgot your Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={()=>{}}>
        <Text style={styles.navButtonText}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    marginTop: 30

  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5'
  },
});