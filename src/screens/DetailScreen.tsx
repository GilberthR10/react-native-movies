import { View, Text, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import Icon from '@expo/vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

type Props = StackScreenProps<RootStackParams, 'DetailScreen'> & {}
const BASE_URL = 'https://image.tmdb.org/t/p/w500'

const screenHeight = Dimensions.get('screen').height

export const DetailScreen = ( { route, navigation }: Props ) => {

  const movie = route.params
  const { isLoading, cast, movieFullDetails } = useMovieDetails(movie.id)

  return (
    <ScrollView>

      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image
            resizeMode='cover'
            source={{
              uri: BASE_URL + movie.poster_path
            }}
            style={styles.posterImage}
          />

        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}> {movie.original_title} </Text>
        <Text style={styles.title}> {movie.title} </Text>
      </View>

      {isLoading ? <ActivityIndicator
        size={30}
        color='red'
        style={{ marginTop: 20 }}
      /> : <MovieDetails cast={cast} movieFullDetails={movieFullDetails!} />
      }

      <View style={styles.backButton}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
        >
          <Icon
            style={{ marginTop: 10 }}
            color="white"
            name="arrow-back-outline"
            size={40}
          />
        </TouchableOpacity>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
      width: '100%',
      height: screenHeight * 0.7,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,

      elevation: 9,
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25
  },

  imageBorder: {
      flex: 1,
      overflow: 'hidden',
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25
  },
  posterImage: {
      flex: 1,
  },

  marginContainer: {
      marginHorizontal: 20,
      marginTop: 20
  },
  subTitle: {
      fontSize: 16,
      opacity: 0.8
  },
  title: {
      fontSize: 20,
      fontWeight: 'bold'
  },
  backButton: {
      position: 'absolute',
      zIndex: 999,
      elevation: 9,
      top: 30,
      left: 5
  }
});