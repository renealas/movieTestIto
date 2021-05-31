import React, {useEffect} from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch} from 'react-redux';

import * as authActions from '../store/actions/auth';

const StartupScreen = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        const tryLogin = async () => {
            const userData = await AsyncStorage.getItem('userData');
            if(!userData){
                // props.navigation.navigate('Auth');
                dispatch(authActions.setDidTryAL());
                return;
            }            
            const transformedData = JSON.parse(userData);
            const {token} = transformedData;
        
            dispatch(authActions.authenticate(token));
        };

        tryLogin();
    }, [dispatch]);

return <View style={styles.screen}>
    <ActivityIndicator size='large' />
</View>
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default StartupScreen;