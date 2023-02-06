import axios from "axios";
export const getUserList = (setData,setFilterData) => {
  axios
    .get("https://dummyjson.com/products")
    .then(function (response) {
      setData(response.data.products);
      setFilterData(response.data.products)
    })
    .catch(function (error) {
      console.log(error);
    });
};

