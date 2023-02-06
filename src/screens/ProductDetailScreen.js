import { Text, Image, StyleSheet, ScrollView } from 'react-native';
import ProductDetailsComponent from '../components/ProductDetailsComponent';

function ProductDetailScreen(props) {
  const { itemDetails } = props?.route?.params;
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: itemDetails.thumbnail }} />
      <Text style={styles.title}>{itemDetails.title}</Text>
      <ProductDetailsComponent
        discountPercentage={itemDetails?.discountPercentage}
        price={itemDetails?.price}
        rating={itemDetails?.rating}
        textStyle={styles.detailText}
      />
    </ScrollView>
  );
}

export default ProductDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode:"cover",
    marginTop:2
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
