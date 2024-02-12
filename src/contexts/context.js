import { createContext, useContext, useReducer, useState } from "react";
import {
  fetchUser,
  fetchLoginInfo,
} from "../until.Reducers/fetchLocalStoregeData";
import { useEffect } from "react";
export const StateContext = createContext();

export const StateProvider = ({ children, initialState, reducer }) => {
  const [userLogin, setUserLogin] = useState(false);

  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
