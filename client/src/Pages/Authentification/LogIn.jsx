import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
const apiurl = import.meta.env.VITE_API_URL_ROOT;
const LogIn = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (formState) => {
      try {
        setError(false);
        const response = await fetch(`${apiurl}/api/users/login`, {
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
          alert("logged in successfully")
          // setError(false);
          navigate("/book now");
        } else {
          setError(response.message);
        }
      } catch (error) {
        setError(error.message);
      }
    },
  });
  // console.log(formik.values);
  return (
    <section>
      <div className="form2">
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="sign-items">
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
              <label htmlFor="password">password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>

            <div className="submit2">
              <button type="submit">log in</button>
            </div>
          </div>
          <p className="form-text">
            don't have an account? <Link to="/sign up">sign up here</Link>
          </p>
          <p className="errormsg">{error && error}</p>
        </form>
      </div>
    </section>
  );
};
export default LogIn;
