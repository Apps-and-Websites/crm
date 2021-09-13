import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { Image } from "cloudinary-react";

const CLOUDINARY_NAME = process.env.REACT_APP_CLOUD_NAME;

const ContactForm = ({
  handleChange,
  setValues,
  values,
  setSubmitting,
  handleSubmit,
  setFieldValue,
  submitForm,
  getSingleApp,
  singleApp,
  appStart,
  deleteApp,
  ...props
}) => {
  const [previewImage, setPreviewImage] = useState("");
  const { id } = props.match.params;
  useEffect(() => {
    if (id) {
      getSingleApp(id);
    }
  }, [id]);

  useEffect(() => {
    if (singleApp) {
      setValues({ ...singleApp, imageUrl: values.imageUrl });
    }
  }, [singleApp]);

  const handleDelete = (e) => {
    e.preventDefault();
    deleteApp(id);
    props.history.push("/apps");
  };

  const renderImage = () => {
    if (previewImage) {
      return (
        <img src={previewImage} alt="project" style={{ width: "300px" }} />
      );
    } else if (singleApp) {
      return (
        <Image
          cloudName={CLOUDINARY_NAME}
          publicId={singleApp.image}
          width="300"
          crop="scale"
        />
      );
    } else {
      return "";
    }
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();

    let data = {};

    if (id) {
      data = {
        ...values,
        id: singleApp.id,
        oldImage: singleApp.image,
        image: previewImage ? previewImage : singleApp.image,
      };
    } else {
      data = {
        ...values,
        image: previewImage,
      };
    }

    setValues(data);
    handleSubmit();
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
  };

  const handuleInputChanges = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    previewFile(file);

    handleChange(e);
  };

  return (
    <>
      {appStart ? (
        "rendering"
      ) : (
        <Form className="form" onSubmit={handleCustomSubmit}>
          <Field
            type="text"
            name="name"
            placeholder="App Name"
            className="form__input"
          />
          <Field
            type="url"
            name="url"
            placeholder="App Link"
            className="form__input"
          />
          <Field
            type="file"
            name="imageUrl"
            className="form__input-file"
            onChange={handuleInputChanges}
          />
          {renderImage()}
          <button type="submit" className="form__submit">
            Submit
          </button>
          {id ? (
            <button
              type="button"
              className="form__submit"
              onClick={handleDelete}
            >
              Delete
            </button>
          ) : (
            ""
          )}
        </Form>
      )}
    </>
  );
};

const FormikContactForm = withFormik({
  mapPropsToValues({ name, image, url, message, website, imageUrl, validate }) {
    return {
      name: name || "",
      imageUrl: imageUrl || "",
      image: image || "",
      url: url || "",
    };
  },

  //=============validation======================

  //=============end of validation===============
  handleSubmit(values, { props, resetForm }) {
    console.log("values: ", values);
    props.addApp(values);
    props.history.push("/apps");
    resetForm();
  },
})(ContactForm);
export default FormikContactForm;
