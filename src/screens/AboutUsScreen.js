import React from "react";
import { Text, View,} from "react-native";
import Colors from "../constants/Colors";
import { dynamicSize } from "../constants/responsive";

const AboutUsScreen = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: dynamicSize(20),color:Colors.WHITE ,textAlign:"center"}}>
        About us Screen This screen is only for demo purpose
      </Text>
    </View>
  );
};

export default React.memo(AboutUsScreen);
