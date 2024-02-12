import React, { useState } from "react";

import { signOut } from "firebase/auth";
import { auth } from "../firestore/firebase-config";
import { useStateValue } from "../contexts/context";

// export const useAuthentication = () => {
//   const [error, setError] = useState(null);
//   const [{ user, Logout }, dispatch] = useStateValue();
// };
export const logout = () => {
  const logoutInfo = signOut(auth)
    .then((response) => {
      console.log("logout successfully");
    })
    .catch((err) => {
      console.log(err.message);
    });
  return logoutInfo;
};
