import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import Error from "../Error/Error";

import { apiRegister } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";

import css from "./RegistrationForm.module.css";

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
  const error = useSelector(selectAuthError);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(apiRegister(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label className={css.field}>
          <span className={css.label}>Name</span>
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Name"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
        <label className={css.field}>
          <span className={css.label}>Email</span>
          <Field
            className={css.input}
            type="email"
            name="email"
            placeholder="example@mail.com"
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </label>
        <label className={css.field}>
          <span className={css.label}>Password</span>
          <Field
            className={css.input}
            type="password"
            name="password"
            placeholder="****************"
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </label>

        <button className={css.signUpBtn} type="submit">
          Sign Up
        </button>
        {error && <Error className={css.errorSummary} />}
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
