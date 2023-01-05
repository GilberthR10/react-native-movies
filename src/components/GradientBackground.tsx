import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
    children: JSX.Element  | JSX.Element[]
}
export const GradientBackground = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      <LinearGradient
       // Background Linear Gradient
       colors={['#084F6A', '#75CEDB', 'white']}
       start={{x: 0.1, y: 0.1 }}
       end={{ x: 0.1, y: 0.8 }}
       style={{ ...StyleSheet.absoluteFillObject }}
      >
        { children }
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });
