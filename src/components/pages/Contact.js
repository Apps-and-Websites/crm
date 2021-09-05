import React from "react";

import ContactForm from "./ContactForm";

function Contact({ id }) {
  return (
    <section className="contact" id={id}>
      <h1 className="heading-primary">Contact Me</h1>

      <ContactForm />
    </section>
  );
}

export default Contact;
