import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import Error from "../Error/Error";
import { apiLogin } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";

import css from "./LoginForm.module.css";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Слишком короткий!")
    .max(50, "Слишком длинный!")
    .required("Обязательно"),
  email: Yup.string().email("Введите корректный email!").required("Обязательно"),
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
            type="email"
            name="email"
            placeholder="example@mail.com"
          />
          <ErrorMessage name="email" component="span" className={css.error} />
        </label>
        <label className={css.field}>
          <span className={css.label}>Пароль</span>
          <Field
            className={css.input}
            type="password"
            name="password"
            placeholder="****************"
          />
          <ErrorMessage name="password" component="span" className={css.error} />
        </label>

        <button className={css.submitButton} type="submit">
          Войти
        </button>
        {error && <Error className={css.errorSummary} />}
      </Form>
    </Formik>
  );
};

export default LoginForm;
