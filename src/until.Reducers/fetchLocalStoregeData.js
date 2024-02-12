export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  return userInfo;
};

export const fetchLoginInfo = () => {
  const loginInfo =
    localStorage.getItem("isLogin") !== "undefined"
      ? JSON.parse(localStorage.getItem("isLogin"))
      : localStorage.clear();

  return loginInfo;
};
