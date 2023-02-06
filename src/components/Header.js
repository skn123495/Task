import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { LIGHT } from "../constants/Constants";
import styles from "./styles";

const Header = (props) => {
  const { onChangeText, onPress, theme } = props;
  return (
    <View style={styles.headerContain}>
      <View style={styles.textInputContainer}>
        <TextInput
          returnKeyType="done"
          style={styles.textBox}
          placeholder="Search"
          onChangeText={onChangeText}
        />
      </View>
      <TouchableOpacity onPress={onPress}>
        <MaterialCommunityIcons
          name="theme-light-dark"
          size={24}
          color={theme === LIGHT ? Colors.COLOR_A3C6C4 : Colors.WHITE}
        />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Header);
