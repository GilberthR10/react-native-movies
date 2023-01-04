import { View, ActivityIndicator, Dimensions, Text, FlatList, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../hooks/useMovies';
import { MovieCard } from '../components/MovieCard';
import Carousel from 'react-native-snap-carousel';
import { MovieRow } from '../components/MovieRow';

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {

  const { nowPlaying, popular,topRated, upComing, isLoading } = useMovies()
  const { top } = useSafeAreaInsets()

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color="red" size={100} />
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>
        <View style={{ height: 440 }}>
          <Carousel
            vertical={false}
            data={nowPlaying!}
            renderItem={({ item }: any) => <MovieCard movie={item} fileSize="/w342" />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>

        <MovieRow movies={ popular } title='Populares' />
        <MovieRow movies={ topRated } title='Top Rated' />
        <MovieRow movies={ upComing }  title='Upcoming' />

      </View>
    </ScrollView>
  )
}
