import AsyncStorage from '@react-native-community/async-storage';

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
export const SET_DID_TRY_AL = 'SET_DID_TRY_AL';

let timer;

export const setDidTryAL = () => {
    return { type: SET_DID_TRY_AL };
};

export const authenticate = (token) => {
    return dispatch => {
        dispatch({ type: AUTHENTICATE, token: token});
    }
}

export const logout = () => {
    AsyncStorage.removeItem('userData');
    return { type: LOGOUT };
};

export const login = (email, password) => {

    return async dispatch => {
        const response = await fetch('https://https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        if (!response.ok) {
            const errorResData = await response.json();
            const errorId = errorResData.error.message;
            let message = 'Algo salio mal!';

            throw new Error(message);
        }       

        const resData = await response.json();      

        var token = resData.token;

        dispatch(
            authenticate(
                token
            )
        );
        saveDataToStorage(token);
    };
};

const saveDataToStorage = (token) => {
    AsyncStorage.setItem('userData', JSON.stringify({
        token: token
    }))
};
