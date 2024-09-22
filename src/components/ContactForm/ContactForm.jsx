import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import { addContact } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Слишком коротко!")
      .max(50, "Слишком длинно!")
      .required("Обязательное поле"),
    number: Yup.string()
      .min(3, "Слишком коротко!")
      .max(50, "Слишком длинно!")
      .required("Обязательное поле"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    toast.success("Контакт успешно добавлен", { duration: 1500 });
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.formWrapper}>
          <label className={css.labelWrapper}>
            <span className={css.label}>Имя</span>
            <Field className={css.input} type="text" name="name" />
            <ErrorMessage className={css.errorMessage} name="name" component="span" />
          </label>

          <label className={css.labelWrapper}>
            <span className={css.label}>Номер</span>
            <Field className={css.input} type="tel" name="number" />
            <ErrorMessage className={css.errorMessage} name="number" component="span" />
          </label>

          <button className={css.submitButton} type="submit">
            Добавить контакт
          </button>
        </Form>
      </Formik>
      <Toaster />
    </div>
  );
}

export default ContactForm;
