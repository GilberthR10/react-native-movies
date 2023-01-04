import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { MovieFullDetails } from '../interfaces/movieInterface';
import { Cast, CreditsResponse } from "../interfaces/CreditsInterface";

interface MovieDetails {
    isLoading: boolean;
    movieFullDetails?: MovieFullDetails;
    cast: Cast[];
}

export const useMovieDetails = ( movieId: number ) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFullDetails: undefined,
        cast: []
    })

    const getMovieDetails = async() => {
        const movieDetailsPromise = movieDB.get<MovieFullDetails>(`/${movieId}`)
        const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`)

        const [movieDetailsResponse, castResponse ] = await Promise.all([ movieDetailsPromise, castPromise ]);

        setState({
            isLoading: false,
            movieFullDetails: movieDetailsResponse.data,
            cast: castResponse.data.cast
        })
    }

    useEffect(() => {
      getMovieDetails()
    }, [])

  return {
    ...state
  }
}
