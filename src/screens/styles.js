import Alignment from "../constants/Alignment";
import Colors from "../constants/Colors";

export default {
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: Alignment.COVER,
    marginTop: 2,
  },
  title: {
    fontWeight: Alignment.BOLD,
    fontSize: 24,
    margin: 8,
    textAlign: Alignment.CENTER,
    color: Colors.WHITE,
  },
  detailText: {
    color: Colors.WHITE,
  },
  listOuterContainer: {
    alignItems: Alignment.CENTER,
  },
  listContainer: {
    width: "80%",
  },
};
