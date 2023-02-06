import React from 'react';
import { Text, Image, ScrollView } from 'react-native';
import ProductDetailsComponent from '../components/ProductDetailsComponent';
import styles from './styles';

function ProductDetailScreen(props) {
  const { itemDetails } = props?.route?.params;
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: itemDetails?.thumbnail }} />
      <Text style={styles.title}>{itemDetails?.title}</Text>
      <ProductDetailsComponent
        discountPercentage={itemDetails?.discountPercentage}
        price={itemDetails?.price}
        rating={itemDetails?.rating}
        textStyle={styles.detailText}
      />
    </ScrollView>
  );
}
export default React.memo(ProductDetailScreen);
