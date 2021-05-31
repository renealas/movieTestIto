import Movie from '../../models/movie';

import Values from '../../constants/ValuesApi';

export const SET_MOVIES = 'SET_MOVIES';

export const fetchMovies = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/upcoming?api_key=${Values.apiKey}&language=${Values.language}&page=1`
            );

            if (!response.ok) {
                throw new Error('Something went Wrong!');
            }

            const restData = await response.json();
            const loadedMovies = [];

            var totalMovies = restData.results.length;
            var i;
            for (i=0; i < totalMovies; i++) {
                loadedMovies.push(
                    new Movie(
                        restData.results[i].id,
                        restData.results[i].title,
                        `https://image.tmdb.org/t/p/original${restData.results[i].poster_path}`,
                        restData.results[i].release_date,
                        restData.results[i].overview,
                        restData.results[i].vote_average
                    )
                );
            }

            dispatch({type: SET_MOVIES, movies: loadedMovies});

        } catch (err) {
            throw err;
        }
    }
}

export const fetchByTitle = searchTerm => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${Values.apiKey}&language=${Values.language}&query=${searchTerm}&page=1&include_adult=false`
            );

            if (!response.ok) {
                throw new Error('Algo salio Mal!');
            }

            const restData = await response.json();

            const loadedMovies = [];

            var totalMovies = restData.results.length;
            var i;
            for (i=0; i < totalMovies; i++) {
                loadedMovies.push(
                    new Movie(
                        restData.results[i].id,
                        restData.results[i].title,
                        `https://image.tmdb.org/t/p/original${restData.results[i].poster_path}`,
                        restData.results[i].release_date,
                        restData.results[i].overview,
                        restData.results[i].vote_average
                    )
                );
            }

            dispatch({type: SET_MOVIES, movies: loadedMovies});

        } catch (err) {
            throw err;
        }
    }
}