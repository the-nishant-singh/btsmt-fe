import { Axios } from "../Utils/network";

const createAlert = (document, callback) => {
  Axios.post("/alerts", { document })
    .then((response) => {
      callback("success", response);
    })
    .catch((err) => {
      callback("error", err.response);
    });
};

const getAlerts = (query, callback) => {
    Axios.get("/alerts", { params: { ...query } })
      .then((response) => {
        callback("success", response);
      })
      .catch((err) => {
        callback("error", err.response);
      });
  };

  const deleteAlert = (id, callback) => {
    Axios.delete(`/alerts/${id}`)
      .then((response) => {
        callback("success", response);
      })
      .catch((err) => {
        callback("error", err.response);
      });
  };

export { createAlert, getAlerts, deleteAlert };
