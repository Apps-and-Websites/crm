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
  getSingleWebsite,
  website,
  websiteStart,
  deleteWebsite,
  ...props
}) => {
  const [previewImage, setPreviewImage] = useState("");
  const { id } = props.match.params;

  useEffect(() => {
    if (id) {
      getSingleWebsite(id);
    }
  }, [id]);

  useEffect(() => {
    if (website) {
      setValues({ ...website, imageUrl: values.imageUrl });
    }
  }, [websiteStart]);

  const handleDelete = (e) => {
    e.preventDefault();
    deleteWebsite(id);
    props.history.push("/admin/");
  };

  const renderImage = () => {
    if (previewImage) {
      return (
        <img src={previewImage} alt="project" style={{ width: "300px" }} />
      );
    } else if (website) {
      return (
        <Image
          cloudName={CLOUDINARY_NAME}
          publicId={website.image}
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
        id: website.id,
        oldImage: website.image,
        image: previewImage ? previewImage : website.image,
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
      {websiteStart ? (
        "rendering"
      ) : (
        <Form className="form" onSubmit={handleCustomSubmit}>
          <Field
            type="text"
            name="name"
            placeholder="Project Name"
            className="form__input"
          />
          <Field
            type="url"
            name="url"
            placeholder="Url Link"
            className="form__input"
          />
          {/* <Field
            type="url"
            name="github_be_url"
            placeholder="Github BE URL"
            className="form__input"
          />
          <Field
            type="url"
            name="github_fe_url"
            placeholder="Github FE URL"
            className="form__input"
          />

          <Field
            component="textarea"
            name="description"
            placeholder="Project Description"
            className="form__textarea"
          /> */}
          <Field
            type="file"
            name="imageUrl"
            className="form__input"
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
    props.addWebsite(values);
    props.history.push("/admin");
    resetForm();
  },
})(ContactForm);
export default FormikContactForm;
