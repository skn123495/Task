import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CategoryGridTileTwo from "../components/CategoryGridTileTwo";
import Header from "../components/Header";
import ListEmpty from "../components/ListEmpty";
import { changeTheme } from "../store/actions/action";
import { getUserList } from "../util/auth";

const HomeScreen = (props) => {
  const [data, setData] = useState("");
  const [filterData, setFilterData] = useState("");
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  useEffect(() => {
    getUserList(setData, setFilterData);
  }, []);
  const themeHandler = () =>
    theme === "DARK"
      ? dispatch(changeTheme("LIGHT"))
      : dispatch(changeTheme("DARK"));

  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      props.navigation.navigate("ProductDetailScreen", {
        itemDetails: itemData.item,
      });
    };
    return (
      <CategoryGridTileTwo
        item={itemData.item}
        onPress={pressHandler}
        theme={theme}
      />
    );
  };

  const handleSearch = (inputString) => {
    const formattedQuery = inputString.toLowerCase();
    if (formattedQuery.length > 0) {
      const filteredData = data.filter((item) => {
        return item?.title?.toLowerCase()?.includes(formattedQuery);
      });
      setData(filteredData);
    }
    if (!inputString || inputString === "") {
      setData(filterData);
    }
  };

  return (
    <>
      <Header
        theme={theme}
        onPress={themeHandler}
        onChangeText={handleSearch}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderCategoryItem}
        ListEmptyComponent={ListEmpty}
      />
    </>
  );
};
export default React.memo(HomeScreen);
