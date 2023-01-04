import { View, Text, FlatList } from 'react-native';
import { MovieFullDetails } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/CreditsInterface';
import Icon from '@expo/vector-icons/Ionicons';
import { formatCurrency } from "react-native-format-currency";
import { CastItem } from './CastItem';

interface Props {
    movieFullDetails: MovieFullDetails;
    cast: Cast[]
}

export const MovieDetails = ({ movieFullDetails, cast }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', marginTop: 2 }}>
                    <Icon name='star-outline' color="grey" size={16} />
                    <Text>{movieFullDetails.vote_average}</Text>
                    <Text style={{ marginLeft: 5 }}>
                        - {movieFullDetails.genres.map(g => g.name).join(', ')}
                    </Text>
                </View>

                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Historia
                </Text>
                <Text style={{ fontSize: 16 }}>
                    {movieFullDetails.overview}
                </Text>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 16 }}>
                    {formatCurrency({ amount: movieFullDetails.budget, code: "USD" })[0]}
                </Text>

            </View>
            {/* Casting */}
            <View style={{ marginTop: 10, marginBottom: 100 }}>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20 }}>
                    Actores
                </Text>

                <FlatList
                    data={cast}
                    keyExtractor={(item, index) => item.id.toString() + index}
                    renderItem={({ item }) => <CastItem actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 10, height: 70 }}
                />
            </View>
        </>
    )
}
