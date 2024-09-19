import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import Error from "../Error/Error";
import { apiLogin } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";

import css from "./LoginForm.module.css";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Enter a valid email!").required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(apiLogin(values));
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
          <span className={css.label}>Email</span>
          <Field
            className={css.input}
            type="text"
            name="email"
            placeholder="example@mail.com"
          />
          <ErrorMessage name="email" component="span" className={css.error} />
        </label>
        <label className={css.field}>
          <span className={css.label}>Password</span>
          <Field
            className={css.input}
            type="password"
            name="password"
            placeholder="****************"
          />
          <ErrorMessage name="password" component="span" className={css.error} />
        </label>

        <button className={css.submitButton} type="submit">
          Log In
        </button>
        {error && <Error />}
      </Form>
    </Formik>
  );
};

export default LoginForm;
