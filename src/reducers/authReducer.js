const user = JSON.parse(localStorage.getItem("user"));
const ltk = localStorage.getItem("ltk");

const initialState = {
  user: user || null,
  ltk: ltk ?? "",
  isLoggedIn: user && ltk ? true : false,
};

const setUser = (user, token) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("ltk", token);
};

const removeUser = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("ltk");
};

const AuthReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      setUser(payload.user, payload.token);
      return {
        user: payload.user,
        ltk: payload.token,
        isLoggedIn: true,
      };
    case "LOGOUT":
      removeUser();
      return {
        user: null,
        ltk: "",
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
