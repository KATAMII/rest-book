import "./Contact.css";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const apiurl = import.meta.env.VITE_API_URL_ROOT;

const Contact = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },

    onSubmit: async (formState) => {
      try {
        setError(false);
        const response = await fetch(`${apiurl}/api/users/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formState),
        });
        // console.log(response);
        const data = await response.json();
        console.log(data);

        if (data.success === true) {
          // setError(false);
          navigate("");
        } else {
          setError(response.message);
        }
      } catch (error) {
        setError(error.message);
      }
    },
  });
  // console.log(formik.values);
  const pageStyle = {
    backgroundColor: "#d9d9d9",
  };
  return (
    <section style={pageStyle}>
      <div className="banner">
        <h1>contact us</h1>
      </div>
      <div className="form">
        <form onSubmit={formik.handleSubmit}>
          <div className="contact-items">
            <div className="form-items">
              <label htmlFor="firstName">first Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-items">
              <label htmlFor="lastName">last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-items">
              <label htmlFor="email">email address</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-items">
              <label htmlFor="phone">phone number</label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
            </div>
            <div className="message">
              <label htmlFor="message">message</label>
              <input
                type="text"
                id="message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="submit">
            <button type="submit">submit</button>
          </div>
          <p className="errormsg">{error && error}</p>
        </form>
      </div>
      <div className="map">
        <div className="map-text">
          <h1>find us on google maps</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            soluta aliquid molestias reiciendis, id aperiam veritatis. Sit at
            quis commodi!
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31916.009254802764!2d37.13520060195052!3d-0.7224462533119203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1717763694691!5m2!1sen!2ske"
          width="600"
          height="450"
        ></iframe>
      </div>
    </section>
  );
};
export default Contact;
