import React from 'react';
import { ScrollView, Text, Image, StyleSheet, View, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

const MovieDetailScreen = props => {
    const movieId = props.route.params.id;

    const selectedMovie = useSelector(state => state.movies.availableMovies.find(movie => movie.id === movieId));

    if (isLoading) {
        return <View style={styles.centered} >
            <ActivityIndicator size='large' />
        </View>
    }
    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedMovie.poster }} />
            <View style={styles.dataContainer}>
                <Text style={styles.description}>Title: <Text style={styles.subtitle}>{selectedMovie.title}</Text></Text>
                <Text style={styles.description}>Realeased on: <Text style={styles.subtitle}>{selectedMovie.realease_date}</Text></Text>
                <Text style={styles.description}>Plot: <Text style={styles.subtitle}>{selectedMovie.overview}</Text> </Text>
                <Text style={styles.description}>Average Votes: <Text style={styles.subtitle}>{selectedMovie.average}</Text></Text>
            </View>
        </ScrollView>
    );
};

export const screenOptions = navData => {
    return {
        headerTitle: navData.route.params.nombre,
    }
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'justify',
        marginVertical: 15,
        fontWeight: 'normal',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 15,
        fontWeight: 'bold',

    },
    dataContainer: {
        width: '80%',
        alignItems: 'center',
        marginHorizontal: 40,
    },
    actions: {
        marginVertical: 10,
        alignItems: 'center',
    },
    estatsContainer: {
        width: '100%',
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        flexDirection: 'row',
    },
    estastData: {
        color: '#F3F4F5',
        fontSize: 23,
        marginRight: 5,
    },
    campoDeDatos: {
        flexDirection: 'row',
    },
    flag: {
        marginBottom: 10,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MovieDetailScreen;

