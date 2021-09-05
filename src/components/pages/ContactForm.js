import React from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import axiosWithAuth from "../../utils/axioswithAuth.js";

import * as reducerActions from "../../redux/actions/actions";


const ContactForm = (props) => {
  return (
    <Form className="form">
      <Field
        type="text"
        name="name"
        placeholder="Name"
        className="form__input"
      />
      <Field
        type="email"
        name="email"
        placeholder="Email"
        className="form__input"
      />
    <Field
        type="tel"
        name="telephone"
        placeholder="Phone Number"
        className="form__input"
      />
      <Field
        component="textarea"
        name="message"
        placeholder="Message"
        className="form__textarea"
      />
      <button type="submit" className="btn form__submit" style={{color:  'white', background: 'black'  }}>
        Submit
      </button>
    </Form>
  );
};

const FormikContactForm = withFormik({
  mapPropsToValues({ name, email, message, telephone }) {
    return {
      name: name || "",
      email: email || "",
      message: message || "",
      telephone: telephone || "",
    };
  },

  //=============validation======================

  //=============end of validation===============
  handleSubmit(values, { resetForm }) {
    axiosWithAuth()
      .post("/email", values)
      .then((res) => {
        console.log("message sent: ", res);
        resetForm();
      })
      .catch(() => console.log("message not sent"));
  },
})(ContactForm);


const mapStateToProps = (state) => {
  return {
    isLight: state.reducer.isLight,
  };
};

const mapDispatchToProps = {
  toggleLightMode: reducerActions.toggleLightMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormikContactForm);

