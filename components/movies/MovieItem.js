import React from 'react';
import { View, Text, Image, StyleSheet, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';

import Card from '../UI/Card';

const MovieItem = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <Card style={styles.product}>
            <View style={styles.touchable}>
                <TouchableCmp onPress={props.onSelect} useForeground>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: props.image }} />
                        </View>
                        <View style={styles.contenedorGeneral}>
                        <View style={styles.details}>                          
                            <Text style={styles.title}>{props.title}</Text>
                            <Text style={{fontWeight: 'bold', color: 'black'}}>Realese Date: <Text style={styles.price}>{props.realese}</Text></Text>
                            <Text style={{fontWeight: 'bold', color: 'black'}}>Plot: <Text style={styles.price}>{props.overview}</Text></Text>
                            <Text style={{fontWeight: 'bold', color: 'black'}}>Average: <Text style={styles.price}>{props.average}</Text></Text>
                        </View>
                        </View>                        
                    </View>
                </TouchableCmp>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    product: {
        height: 700,
        margin: 20,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    contenedorGeneral: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 10,
        justifyContent: 'center',      
    },
    title: {
        fontSize: 18,
        marginVertical: 4,
        fontWeight: 'bold',
    },
    numberContainer:{
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginHorizontal: 5,
        marginVertical: 10,
        fontFamily: 'number'
    },  
    number: {
        fontSize: 50,
        marginVertical: 4,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: 'blue',
    },
    price: {
        fontSize: 14,
        color: '#888',
        fontWeight: 'bold',
    },
    details: {
        alignItems: 'center',
        height: '5%',
        padding: 5,
        marginVertical: 4,
        flexDirection: 'column'
    },
    imageContainer: {
        width: '100%',
        height: '50%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
    },
    touchable: {
        overflow: 'hidden',
        borderRadius: 10,
    },
});

export default MovieItem;