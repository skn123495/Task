import React from "react";
import { Pressable, View, Text } from "react-native";
import Colors from "../constants/Colors";
import styles from "./styles";

const CategoryGridTileTwo = (props) => {
  const { item, onPress, theme } = props;
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.innerContainer(theme)}>
          <Text style={styles.title(theme)}>{item.title}</Text>
          <Text style={styles.desc(theme)} numberOfLines={3}>
            {item.description}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default React.memo(CategoryGridTileTwo);
