import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const apiurl = import.meta.env.VITE_API_URL_ROOT;
const Book = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      checkIn: "",
      checkOut: "",
      roomsBooked: "",
    },
    onSubmit: async (formState) => {
      try {
        setError(false);
        const response = await fetch(`${apiurl}/api/users/book`, {
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
          alert("room booked successfully")
          navigate("");
        } else {
          setError(response.message);
        }
      } catch (error) {
        setError(error.message);
      }
    },
  });
  console.log(formik.values);
  return (
    <section>
      <div className="form1">
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="sign-items">
            <div className="form-comp">
              <label htmlFor="firstName">first name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-comp">
              <label htmlFor="lastName">last name</label>
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
              <label htmlFor="date">check in</label>
              <input
                type="date"
                id="date"
                name="checkIn"
                value={formik.values.checkIn}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-comp">
              <label htmlFor="date">check out</label>
              <input
                type="date"
                id="date"
                name="checkOut"
                value={formik.values.checkOut}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-comp">
              <label htmlFor="number">rooms booked</label>
              <input
                type="number"
                id="number"
                name="roomsBooked"
                value={formik.values.roomsBooked}
                onChange={formik.handleChange}
              />
            </div>
            <div className="submit2">
              <button type="submit">submit</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Book;
