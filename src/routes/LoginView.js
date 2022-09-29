import styled from "styled-components";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { useState } from "react";
import { FrameStoreContext } from "../contexts/FrameStoreContext";

const FormError = styled.div`
  color: red;
  padding: 20px 0;
`;

const LoginView = ({ className }) => {
  const [frameStoreData, setFrameStoreData] = useState(FrameStoreContext);
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required to logIn")
      .email("Invalid email"),
    password: yup
      .string()
      .required("A password is necessary")
      .min(8, "Must be at least 8 chars"),
  });
  return (
    <div>
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          setFrameStoreData({
            ...frameStoreData,
            logInValues: values,
          });
          console.log(frameStoreData);
        }}
      >
        {({ errors, values, handleBlur, handleChange }) => (
          <Form>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              placeholder="Enter email"
              id="email"
            />
            <FormError>{errors.email}</FormError>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              placeholder="Enter password"
              id="password"
            />
            <FormError>{errors.password}</FormError>

            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default styled(LoginView)`
  background-color: #eee;
`;
