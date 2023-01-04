import movieDB from '../api/movieDB';
import { useEffect, useState } from 'react';
import { MovieDBDataResponse, Movie } from '../interfaces/movieInterface';

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upComing: Movie[];
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upComing: []
    })

    const getMovies = async () => {

        const nowPlayingPromise =  movieDB.get<MovieDBDataResponse>('/now_playing');
        const popularPromise = movieDB.get<MovieDBDataResponse>('/popular');
        const topRatedPromise = movieDB.get<MovieDBDataResponse>('/top_rated');
        const upComingPromise = movieDB.get<MovieDBDataResponse>('/upcoming');

        const response = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upComingPromise
        ])


        setMoviesState({
            nowPlaying: response[0].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
            upComing: response[3].data.results
        })
        setIsLoading(false)
    }
    useEffect(() => {
        //now in theatres
        getMovies()
    }, [])

    return {
        ...moviesState,
        isLoading
    }
}
