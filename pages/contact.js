import React from "react";
import { Button, Form, Icon, Message, Segment } from "semantic-ui-react";
import Link from "next/link";
import axios from "axios";


export default function Contact() {
  const [form, setForm] = React.useState("");
  const [disabled, setDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  var date = new Date();


  function handleChange(event) {
    const { name, value } = event.target;
    setForm(prevState => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      setError("");
      const url = `/api/contact`;
      const payload = { ...form};
      const response = await axios.post(url, payload);
      console.log(response);
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div class="pageContact">
      <div class="contactMain">
        {success ? (

          <div class="formSuccess">
            <div class="formSuccess-box">
              <p> <Icon name="check" color="teal" size="large" /> </p>
              <p> Message sent. </p>
              <p> Thank you. </p>
            </div>
          </div>

        ) : (

          <>
            <h1> Contact </h1>

            <div class="contactForm">

              <Form onSubmit={handleSubmit} >
                <Form.Input
                  required
                  className="contactField"
                  label="Name"
                  placeholder="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}

                />
                <Form.Input
                  required
                  className="signInInput"
                  label="Email"
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />
                <Form.Field
                  className="signInInput textArea"
                  label="Message"
                  control="textarea"
                  rows="14"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                />

                <div class="submitForm">
                  <Button
                    type="submit"
                    className="submit-button"
                    content="Submit"
                    size="large"
                    disabled={success}
                  />
                </div>

              </Form>

            </div>

          </>
        )}

      </div>

      <div>
        <p class="footer"> {`© All Rights Reserved ${date.getFullYear()}`} </p>
      </div>

    </div>

  )

}
