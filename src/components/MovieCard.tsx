import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Movie } from '../interfaces/movieInterface';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
    fileSize?: string
}

const BASE_URL = 'https://image.tmdb.org/t/p'

export const MovieCard = ({ movie, height = 420, width = 300, fileSize = '/w500' }: Props) => {
    const navigator = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigator.navigate("DetailScreen", movie )}
            activeOpacity={0.8}
            style={{
                width,
                height,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 5
            }}>
            <View style={styles.imageContainer}>
                <Image
                    source={{
                        uri: BASE_URL + fileSize + movie.poster_path
                    }}
                    style={styles.image}
                />

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 20,
    },
    imageContainer: {
        borderRadius: 20,
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
    }
});
