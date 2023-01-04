import React from 'react'
import { Movie } from '../interfaces/movieInterface';
import { FlatList, Text, View } from 'react-native';
import { MovieCard } from './MovieCard';

interface Prop {
    title?: string;
    movies: Movie[]
}

export const MovieRow = ({ movies, title }: Prop) => {
    return (
        <View style={{
            height: (title) ? 260 : 220,
        }}>
            {title && <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>{title}</Text>}
            <FlatList
                data={movies}
                renderItem={({ item }: any) => (
                    <MovieCard movie={item} width={140} height={200} fileSize="/w185" />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}
