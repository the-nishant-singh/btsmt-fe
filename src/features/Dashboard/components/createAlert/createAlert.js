import React, { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { createAlert } from "../../../../actions/alert";
import "./createAlert.css";

const Createalert = () => {
  const [err, setErr] = useState("");
  const [succ, setSucc] = useState("");

  const Validations = Yup.object({
    email: Yup.string().email("Invalid Email").required("required"),
    name: Yup.string()
      .min(3, "Must be at least 3 char long")
      .required("required"),
    criteria: Yup.string().required("required"),
    activeDays: Yup.string().required("required"),
    priceSignal: Yup.string().required("required"),
    phone: Yup.string().min(10, "Invalid phone").required("required"),
    value: Yup.string().required("required"),
  });
  const handleSubmit = (values) => {
    createAlert(values, (type, response) => {
      setMessage(type, response)
    });
  };

  const setMessage = (type, response) => {
    if ((type = "success")) {
      setSucc("Alert Created Successfully");
    } else {
      setErr(response.data.message);
    }
    setTimeout(() => {
      setErr("");
      setSucc("");
    }, 6000);
  };

  return (
    <div className="createalert_wrapper">
      <h5 className="createalert_title">Create Alert</h5>
      <p className="error_message_alert">{ err }</p>
      <p className="succ_message_alert">{ succ }</p>
      <Formik
        initialValues={{
          name: "",
          value: "",
          criteria: "Less Than",
          activeDays: "",
          priceSignal: "",
          email: "",
          phone: "",
        }}
        validationSchema={Validations}
        onSubmit={(values) => handleSubmit(values)}
      >
        <div>
          <Form>
            <Field
              name="name"
              type="text"
              className="custom_input"
              placeholder="Name"
            />
            <ErrorMessage
              component="span"
              name="name"
              className="error_message_alert"
            />

            <label className="form_label">Criteria</label>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="criteria" value="Less Than" />
                Less Than
              </label>
              <label>
                <Field type="radio" name="criteria" value="Greater Than" />
                Greater Than
              </label>
            </div>

            <Field name="activeDays" as="select" className="custom_input">
              <option value="" disabled selected hidden>
                Active Days
              </option>
              <option value="Sun">Sunday</option>
              <option value="Mon">Monday</option>
              <option value="Tue">Tuesday</option>
              <option value="Wed">Wedensday</option>
              <option value="Thu">Thursday</option>
              <option value="Fri">Friday</option>
              <option value="Sat">Saturday</option>
              <option value="Every">Everyday</option>
            </Field>
            <ErrorMessage
              component="span"
              name="activeDays"
              className="error_message_alert"
            />

            <label className="form_label">Criteria</label>
            <Field name="priceSignal" as="select" className="custom_input">
              <option value="" disabled selected hidden>
                Price Signal
              </option>
              <option value="DK1">DK1</option>
              <option value="DK2">DK2</option>
            </Field>
            <ErrorMessage
              component="span"
              name="priceSignal"
              className="error_message_alert"
            />

            <Field
              name="value"
              type="text"
              className="custom_input"
              placeholder="Value"
            />
            <ErrorMessage
              component="span"
              name="value"
              className="error_message_alert"
            />

            <Field
              name="email"
              type="text"
              className="custom_input"
              placeholder="Email"
            />
            <ErrorMessage
              component="span"
              name="email"
              className="error_message_alert"
            />

            <Field
              name="phone"
              type="text"
              className="custom_input"
              placeholder="phone"
            />
            <ErrorMessage
              component="span"
              name="phone"
              className="error_message_alert"
            />
            <div className="btn_container_alert">
              <ColorButton type="submit" variant="contained">
                Submit
              </ColorButton>
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "#0d1148",
  minWidth: "7rem",
  borderRadius: 10,
  "&:hover": {
    backgroundColor: "#0d1148",
  },
}));

export default Createalert;
