import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./store";
import "./App.css";
import Login from "./features/Auth/auth";
import { PrivateRoute } from "./Utils/authGuard";
import Dashboard from "./features/Dashboard";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get(process.env.REACT_APP_API_BASE_URL)
    .then(res => {})
    .catch(err => { console.log('server is offline') })
  }, [])
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute redirectPath={"/"} Component={Dashboard} />
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
