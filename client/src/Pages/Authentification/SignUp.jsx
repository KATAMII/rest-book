import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Authentification.css";
import { useFormik } from "formik";
import { useState } from "react";

const apiurl = import.meta.env.VITE_API_URL_ROOT;

const SignUp = () => {
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (formState) => {
    try {
      const response = await fetch(`${apiurl}/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();
      console.log(data);

      if (data.success === true) {
        alert("signed up successfully")
        // setError(false);
        navigate("/log in");
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      conPassword: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <section>
      <div className="form1">
        <form onSubmit={formik.handleSubmit}>
          <div className="sign-items">
            <div className="form-comp">
              <label htmlFor="firstName">firstName</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-comp">
              <label htmlFor="lasttName">lastName</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-comp">
              <label htmlFor="email">email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-comp">
              <label htmlFor="phone">phone number</label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-comp">
              <label htmlFor="password">password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>
            {/* <div className="form-comp">
              <label htmlFor="password">confirm password</label>
              <input
                type="password"
                id="conPassword"
                name="conPassword"
                value={formik.values.conPassword}
                onChange={formik.handleChange}
              />
            </div> */}
            <div className="submit2">
              <button type="submit">sign up</button>
            </div>
          </div>
          <p className="form-text">
            already have an account? <Link to="/log in">log in here</Link>
          </p>
          <p className="errormsg">{error && error}</p>
        </form>
      </div>
    </section>
  );
};
export default SignUp;
