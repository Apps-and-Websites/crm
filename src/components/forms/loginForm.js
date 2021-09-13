import React from "react";
import * as Yup from "yup";
import { withFormik, Form, Field } from "formik";
import Loader from "react-loader-spinner";

const LoginForm = (props) => {
  return (
    <>
      {props.userStart ? (
        <div className="login-spinner-holder">
          <Loader type="Rings" color="#0095b6" height={400} width={400} />
          <p>Logging In...</p>
        </div>
      ) : (
        <Form className="loginForm">
          <Field
            type="text"
            name="username"
            placeholder="username"
            autoComplete="on"
          />
          <Field
            type="password"
            name="password"
            placeholder="password"
            autoComplete="on"
          />
          <button type="submit">Log In</button>
        </Form>
      )}
    </>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },

  //=============validation======================
  validationSchema: Yup.object().shape({
    username: Yup.string().required("username is require"),
    password: Yup.string().required("password is required"),
  }),
  //=============end of validation===============
  handleSubmit(values, { props, resetForm }) {
    props.loginUser(values);
    resetForm();
  },
})(LoginForm);
export default FormikLoginForm;
