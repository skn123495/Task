import Colors from "../constants/Colors";
import { DARK } from "../constants/Strings";

export default {
  drawerScreenOptions: (theme) => ({
    headerStyle: {
      backgroundColor: theme === DARK ? Colors.BLACK : "#351401",
    },
    headerTintColor: Colors.WHITE,
    sceneContainerStyle: {
      backgroundColor: theme === DARK ? Colors.LIGHT_BLACK : "#3f2f25",
    },
    drawerContentStyle: {
      backgroundColor: theme === DARK ? Colors.LIGHT_BLACK : "#351401",
    },
    drawerInactiveTintColor: Colors.WHITE,
    drawerActiveTintColor: theme === DARK ? Colors.WHITE : "#351401",
    drawerActiveBackgroundColor:
      theme === DARK ? Colors.LIGHT_BLACK : "#e4baa1",
  }),

  screenOptionsing: (theme) => ({
    headerStyle: {
      backgroundColor: theme === DARK ? Colors.BLACK : "#351401",
    },
    headerTintColor: Colors.WHITE,
    contentStyle: {
      backgroundColor: theme === DARK ? Colors.BLACK : "#3f2f25",
    },
  }),
  tabScreenOptions: (theme) => ({
    headerShown: false,
    tabBarActiveBackgroundColor:
      theme === DARK ? Colors.LIGHT_BLACK : "#3f2f25",
    tabBarInactiveBackgroundColor:
      theme === DARK ? Colors.LIGHT_BLACK : "#3f2f25",
    tabBarActiveTintColor: theme === DARK ? Colors.WHITE : Colors.error100,
  }),
};
