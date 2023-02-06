import React from "react";
import { Text } from "react-native";
import styles from "./styles";
const ListEmpty = () => <Text style={styles.empty}>No Data Found ...</Text>
export default React.memo(ListEmpty);
