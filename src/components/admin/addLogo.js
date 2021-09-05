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
  getSingleLogo,
  singleLogo,
  logoStart,
  deleteLogo,
  ...props
}) => {
  const [previewLogo, setPreviewLogo] = useState("");
  const { id } = props.match.params;

  useEffect(() => {
    if (id) {
      getSingleLogo(id);
    }
  }, [id]);

  useEffect(() => {
    if (singleLogo) {
      setValues({
        ...singleLogo,
        logoUrl: values.logoUrl,
        oldLogo: singleLogo.logo,
      });
    }
  }, [logoStart]);

  const handleDelete = (e) => {
    e.preventDefault();
    deleteLogo(id);
    props.history.push("/admin/logos");
  };

  const renderImage = () => {
    if (previewLogo) {
      return <img src={previewLogo} alt="project" style={{ width: "300px" }} />;
    } else if (singleLogo) {
      return (
        <Image
          cloudName={CLOUDINARY_NAME}
          publicId={singleLogo.logo}
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
        oldLogo: singleLogo.logo,
        id: id,
        logo: previewLogo ? previewLogo : singleLogo.logo,
      };
    } else {
      data = {
        ...values,
        logo: previewLogo,
      };
    }

    setValues(data);
    handleSubmit();
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewLogo(reader.result);
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
      {logoStart ? (
        "rendering"
      ) : (
        <Form className="form" onSubmit={handleCustomSubmit}>
          <Field
            type="file"
            name="logoUrl"
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
  mapPropsToValues({ name, logo, url, message, project, logoUrl, validate }) {
    return {
      logoUrl: logoUrl || "",
      logo: logo || "",
    };
  },

  //=============validation======================

  //=============end of validation===============
  handleSubmit(values, { props, resetForm }) {
    // console.log("values: ", values);
    props.addLogo(values);
    props.history.push("/admin/logos");
    resetForm();
  },
})(ContactForm);
export default FormikContactForm;
