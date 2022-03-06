import React from "react";
import { Formik } from "formik";
import axios from "axios";

function UserData() {
  return (
    <div>
      <h1>THIS IS USER</h1>
      <Formik
        initialValues={{ email: "", User_id: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const email = values.email;
          const User_id = values.User_id;
          const data = { email, User_id };
          axios.post("http://localhost:5000/user", data).then((res) => {
            console.log(res);
            console.log(res.data);

            const auth_token = res.data.token;
            console.log(auth_token);
          });
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="string"
              name="User_id"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.User_id}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default UserData;
