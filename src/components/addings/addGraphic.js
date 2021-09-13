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
  getSingleGraphic,
  singleGraphic,
  graphicStart,
  deleteGraphic,
  ...props
}) => {
  const [previewGraphic, setPreviewGraphic] = useState("");
  const { id } = props.match.params;

  useEffect(() => {
    if (id) {
      getSingleGraphic(id);
    }
  });

  useEffect(() => {
    if (singleGraphic) {
      setValues({
        ...singleGraphic,
        graphicUrl: values.graphicUrl,
        oldGraphic: singleGraphic.graphic,
      });
    }
  });

  const handleDelete = (e) => {
    e.preventDefault();
    deleteGraphic(id);
    props.history.push("/admin/graphics");
  };

  const renderImage = () => {
    if (previewGraphic) {
      return (
        <img src={previewGraphic} alt="project" style={{ width: "300px" }} />
      );
    } else if (singleGraphic) {
      return (
        <Image
          cloudName={CLOUDINARY_NAME}
          publicId={singleGraphic.graphic}
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
        oldGraphic: singleGraphic.graphic,
        id: id,
        graphic: previewGraphic ? previewGraphic : singleGraphic.graphic,
      };
    } else {
      data = {
        ...values,
        graphic: previewGraphic,
      };
    }

    setValues(data);
    handleSubmit();
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewGraphic(reader.result);
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
      {graphicStart ? (
        "rendering"
      ) : (
        <Form className="form" onSubmit={handleCustomSubmit}>
          <Field
            type="file"
            name="graphicUrl"
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
  mapPropsToValues({
    name,
    graphic,
    url,
    message,
    project,
    graphicUrl,
    validate,
  }) {
    return {
      graphicUrl: graphicUrl || "",
      graphic: graphic || "",
    };
  },

  //=============validation======================

  //=============end of validation===============
  handleSubmit(values, { props, resetForm }) {
    // console.log("values: ", values);
    props.addGraphic(values);
    props.history.push("/admin/graphics");
    resetForm();
  },
})(ContactForm);
export default FormikContactForm;
