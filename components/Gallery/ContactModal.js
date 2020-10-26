import React from "react";
import { Button, Form, Icon } from "semantic-ui-react";
import axios from "axios";


export default function ContactModal({ setContactModal, page }) {
  const photo = `/images/thumbnails/${page}.jpg`;
  const [form, setForm] = React.useState({ message: "Is this painting available?", photo: photo });
  const [disabled, setDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState(false);


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
      const payload = { ...form };
      const response = await axios.post(url, payload);
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div class="contactModalDiv">

      {success ? (

        <div class="formSuccess-box">
          <p> <Icon name="check" color="teal" size="large" /> </p>
          <p> Message sent. </p>
          <p> Thank you. </p>
        </div>

      ) : (

        <>
          <div class="photoModalRow">
            <img src={`/images/full_size/${page}.jpg`} class="card-img-top photoModal" alt="..."/>
          </div>


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
                className="signInInput"
                label="Message"
                control="textarea"
                rows="10"
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
  )
}
