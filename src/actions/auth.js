import { Axios } from "../Utils/network";

const loginUser = (user, callback) => {
  return (dispatch) => {
    return Axios.post("/auth/singin", { user })
      .then((response) => {
        const payload = {
          user: response.data.user,
          token: response.data.token,
        };
        dispatch(setAuth(payload));
        callback("success", response);
      })
      .catch((err) => {
        callback("error", err.response);
      });
  };
};

const registerUser = (user, callback) => {
  return (dispatch) => {
    return Axios.post("/auth/register", { user })
      .then((response) => {
        const payload = {
          user: response.data.user,
          token: response.data.token,
        };
        dispatch(setAuth(payload));
        callback("success", response);
      })
      .catch((err) => {
        callback("error", err.response);
      });
  };
};

const logoutUser = (callback) => {
  return (dispatch) => {
    dispatch(removeAuth());
    callback()
  };
};

const setAuth = (payload) => {
  return {
    type: "LOGIN",
    payload,
  };
};

const removeAuth = () => {
  return {
    type: "LOGOUT",
    payload: {},
  };
};

export { loginUser, logoutUser, registerUser};
