import { createContext, useContext, useReducer, useState } from "react";
import HomeProduct from "../HomeProduct";
import { useEffect } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  // const [allProduct, setAllProduct] = useState(HomeProduct);
  const [userLogin, setUserLogin] = useState(false);
  const [search, setSearch] = useState("");
  ///search  filter method

  // const searchbtn = (allProduct) => {
  // const change = HomeProduct.filter((x) => {
  //   return x.Cat === allProduct;
  // });
  // const allProduct = HomeProduct.filter((curElm) =>)

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchValue = () => useContext(SearchContext);
