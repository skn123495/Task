import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const ProductDetailsComponent = (props) => {
  const { rating, price, discountPercentage, style, textStyle } = props;
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>Price: $ {price}</Text>
      <Text style={[styles.detailItem, textStyle]}>Rating: {rating}</Text>
      <Text style={[styles.detailItem, textStyle]}>
        Discount : $ {discountPercentage} %
      </Text>
    </View>
  );
};
export default React.memo(ProductDetailsComponent);
