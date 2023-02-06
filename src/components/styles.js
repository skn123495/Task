import Alignment from "../constants/Alignment";
import Colors from "../constants/Colors";
import { dynamicSize, normalize, vh } from "../constants/responsive";
import { DARK } from "../constants/Strings";

export default {
  gridItem: {
    flex: 1,
    margin: dynamicSize(16),
    height: dynamicSize(160),
    borderRadius: dynamicSize(10),
    elevation: dynamicSize(4),
    backgroundColor: Colors.WHITE,
    shadowColor: Colors.BLACK,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: dynamicSize(8),
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: (theme) => ({
    flex: 1,
    padding: dynamicSize(16),
    borderRadius:dynamicSize(8),
    justifyContent: Alignment.CENTER,
    alignItems: Alignment.CENTER,
    backgroundColor: theme === DARK ? Colors.BLACK : Colors.WHITE,
  }),
  title: (theme) => ({
    fontWeight: Alignment.BOLD,
    fontSize: normalize(20),
    textAlign: Alignment.CENTER,
    color: theme === DARK ? Colors.WHITE : Colors.BLACK,
  }),
  desc: (theme) => ({
    fontSize: normalize(11),
    textAlign: Alignment.CENTER,
    color: theme === DARK ? Colors.WHITE : Colors.BLACK,
  }),
  pressed: {
    opacity: 0.7,
  },
  details: {
    flexDirection: Alignment.ROW,
    alignItems: Alignment.CENTER,
    justifyContent: Alignment.CENTER,
    padding: dynamicSize(8),
  },
  detailItem: {
    marginHorizontal: dynamicSize(4),
    fontSize: dynamicSize(12),
  },
  empty: {
    color: Colors.WHITE,
    fontWeight: Alignment.BOLD,
    fontSize: normalize(22),
    textAlign: Alignment.CENTER,
    marginTop: dynamicSize(250),
  },
  headerContain:{
    flexDirection: Alignment.ROW,
    justifyContent: Alignment.SPACE_BETWEEN,
    alignItems: Alignment.CENTER,
    width:"90%",
    alignSelf:Alignment.CENTER
  },
  textInputContainer: {
    flexDirection: Alignment.ROW,
    borderWidth: 2.4,
    borderColor: Colors.GRAY,
    borderRadius: dynamicSize(10),
    width: "88%",
    marginTop: 1 * vh,
    backgroundColor: Colors.WHITE,
  },
  textBox: {
    width: "88%",
    padding: dynamicSize(5),
    backgroundColor: Colors.WHITE,
    borderRadius: dynamicSize(20),
  },
};
