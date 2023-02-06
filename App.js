import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import MainNavigator from "./src/navigatioin/MainNavigator";
import themeReducer from "./src/store/reducers/themeReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
});
const store = createStore(rootReducer);

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </>
  );
};

export default App;
