import React, {useCallback, useState, useEffect} from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';

import * as moviesActions from '../store/actions/movies';
import MovieItem from '../components/movies/MovieItem';

const Home = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState();
    const [searchTerm, setSearchTerm] = useState('');

    const movies = useSelector(state => state.movies.availableMovies);

    const dispatch = useDispatch();

    const loadMovies = useCallback(async () => {
        setError(null);
        setIsRefreshing(true);
        try {
            await dispatch(moviesActions.fetchMovies());
        } catch (err) {
            setError(err.message);
        }
        setIsRefreshing(false);
    }, [dispatch, setIsLoading, setError]);

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', loadMovies);

        return () => {
            unsubscribe();
        };
    }, [loadMovies]);

    useEffect(() => {       
        setIsLoading(true); 
        loadMovies().then(() => {
            setIsLoading(false);
        });
    }, [dispatch, loadMovies]);

    const selectItemHandler = (id, title) => {

        props.navigation.navigate('MovieDetail', {
             id: id,
             title: title,
         });
     }

     const searchByTerm = useCallback(async (searchTerm) => {
        setError(null);
        setIsRefreshing(true);
        try {
            await dispatch(moviesActions.fetchByTitle(searchTerm));
        } catch (err) {
            setError(err.message);
        }
        setIsRefreshing(false);
    }, [dispatch, setIsLoading, setError]);

    if(error){
        return <View style={styles.centered} >
        <Text>Error: {error}</Text>
        <Button title='Try Again' onPress={loadMovies} />
    </View>
    }

    if (isLoading) {
        return <View style={styles.centered} >
            <ActivityIndicator size='large'/>
        </View>
    }

    if (!isLoading && movies.length === 0) {
       return <View style={styles.centered} >
            <Text>No Movies available</Text>
        </View>
    }

    return (
        <View style={styles.centered} >
           <View style={{width: '95%', marginTop: 70}}>
            <SearchBar
                placeholder="Type Here..."
                onChangeText = {(value) => setSearchTerm(value)}
                onKeyPress = {searchByTerm(searchTerm)}               
                value = {searchTerm}
            />
            </View> 
            <FlatList
            onRefresh={loadMovies}
            refreshing={isRefreshing}
            data={movies}
            keyExtractor={item => item.id.toString()}
            renderItem={
                itemData => <MovieItem
                    image={itemData.item.poster}
                    title={itemData.item.title}
                    realese={itemData.item.realease_date}
                    overview={itemData.item.overview}
                    average={itemData.item.average}
                    onSelect={() => {
                        selectItemHandler(itemData.item.id, itemData.item.title);
                    }}
                />
            }
        />
        </View>
    );
};

export const screenOptions = navData => {
    return {
        headerTitle: 'Movies',
    }
};

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Home;