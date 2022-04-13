import { Field, Form, Formik, ErrorMessage } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import * as Yup from "yup";
import { loginUser, registerUser } from "../../actions/auth";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./auth.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [err, setErr] = useState("");
  
  const loginValidations = Yup.object({
    email: Yup.string().email("Invalid Email").required("required"),
    password: Yup.string()
      .min(8, "Must be at least 8 char long")
      .required("required"),
  });

  const registerValidations = Yup.object({
    email: Yup.string().email("Invalid Email").required("required"),
    password: Yup.string()
      .min(8, "Must be at least 8 char long")
      .required("required"),
    name: Yup.object({
      first: Yup.string().min(3, "Invalid").required("required"),
      last: Yup.string().min(3, "Invalid").required("required"),
    }),
  });

  const handleLoginSubmit = (values) => {
    dispatch(
      loginUser(values, (type, response) => {
        if (type === "success") {
          navigate("/dashboard");
        } else {
          setErr(response.data.message);
        }
      })
    );
  };

  const handleRegisterSubmit = (values) => {
    dispatch(
      registerUser(values, (type, response) => {
        if (type === "success") {
          navigate("/dashboard");
        } else {
          setErr(response.data.message);
        }
      })
    );
  };

  return (
    <div className="auth_wrapper">
      <Card variant="outlined" className="card">
      {isLogin ? (
        <div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginValidations}
            onSubmit={(values) => handleLoginSubmit(values)}
          >
            <Form>
              <Field name="email" type="text" className="auth_input" placeholder="Email"/>
              <ErrorMessage
                component="span"
                name="email"
                className="error_message"
              />
              <br />
              <Field name="password" type="password" className="auth_input" placeholder="Password"/>
              <ErrorMessage
                component="span"
                name="password"
                className="error_message"
              />
              <br />
              <ColorButton type="submit">Submit</ColorButton>
              <br />
              <a
                onClick={() => {
                  setIsLogin(false);
                  setErr("");
                }}
              >
                New User? register
              </a>
            </Form>
          </Formik>
        </div>
      ) : (
        <div>
          <Formik
            initialValues={{
              name: { first: "", last: "" },
              email: "",
              password: "",
            }}
            validationSchema={registerValidations}
            onSubmit={(values) => handleRegisterSubmit(values)}
          >
            <Form>
              <Field name="name.first" type="text" className="auth_input" placeholder="First Name"/>
              <ErrorMessage
                component="span"
                name="name.first"
                className="error_message"
              />
              <br />
              <Field name="name.last" type="text" className="auth_input" placeholder="Last Name"/>
              <ErrorMessage
                component="span"
                name="name.last"
                className="error_message"
              />
              <br />
              <Field name="email" type="text" className="auth_input" placeholder="Email"/>
              <ErrorMessage
                component="span"
                name="email"
                className="error_message"
              />
              <br />
              <Field name="password" type="password" className="auth_input" placeholder="Password"/>
              <ErrorMessage
                component="span"
                name="password"
                className="error_message"
              />
              <br />
              <ColorButton type="submit">Submit</ColorButton>
              <br />
              <a
                onClick={() => {
                  setIsLogin(true);
                  setErr("");
                }}
              >
                Already regitered? login
              </a>
            </Form>
          </Formik>
        </div>
      )}
      <p className="error_message">{err}</p>
      </Card>
    </div>
  );
};

const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "#0d1148",
  minWidth: "7rem",
  borderRadius: 10,
  margin: '1rem 0',
  "&:hover": {
    backgroundColor: "#0d1148",
  },
}));

export default Login;
