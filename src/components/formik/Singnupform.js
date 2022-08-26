import React from "react";
import { Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import Textfiled from "./Textfiled";

const Singnupform = () => {
  const errors = {};

  const validation = Yup.object({
    username: Yup.string()
      .max(16, "Must be 16 letters")
      .required("user name is must"),
    password: Yup.string()
      .max(8, "must be six letters")
      .required("password is must"),
    email: Yup.string()
    .email('Email is invalid')
    .required("Email is must"),
    mobilenumber: Yup.string()
      .max(10, "must be ten letters")
      .required("Mobile number is must"),
    city: Yup.string()
      .max(10, "must be ten letters")
      .required("City is must"),
  });
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
          mobilenumber: "",
          city: "",
        }}
        validationSchema={validation}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <div>
            <Form>
              <Textfiled label="UserName" name="username" type="text" placeholder=" Enter your Name" />
              <Textfiled label="Email" name="email" type="email" placeholder=" Enter your Email"/>
              <Textfiled label="Password" name="password" type="password" />
              <Textfiled
                label="Mobile Number"
                name="mobilenumber"
                type="number"
              />
              <Textfiled label="City" name="city" type="text" />
              <br />
              <Button variant="outline-warning" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Singnupform;
