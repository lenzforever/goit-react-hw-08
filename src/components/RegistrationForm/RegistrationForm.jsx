import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import Error from "../Error/Error";
import { apiRegister } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";

import styles from "./RegistrationForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Enter a valid email!").required("Required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const authError = useSelector(selectAuthError);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(apiRegister(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <Form className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Name</label>
            <Field
              className={styles.input}
              type="text"
              name="name"
              placeholder="Name"
            />
            <ErrorMessage className={styles.error} name="name" component="span" />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <Field
              className={styles.input}
              type="email"
              name="email"
              placeholder="example@mail.com"
            />
            <ErrorMessage className={styles.error} name="email" component="span" />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Password</label>
            <Field
              className={styles.input}
              type="password"
              name="password"
              placeholder="****************"
            />
            <ErrorMessage
              className={styles.error}
              name="password"
              component="span"
            />
          </div>

          <button className={styles.signUpBtn} type="submit">
            Sign Up
          </button>
          {authError && <Error className={styles.errorSummary} />}
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
