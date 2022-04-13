import { Axios } from "../Utils/network";

const getchartsData = (callback) => {
    Axios.get("/chart",)
      .then((response) => {
        callback("success", response);
      })
      .catch((err) => {
        callback("error", err.response);
      });
  };

export { getchartsData };
