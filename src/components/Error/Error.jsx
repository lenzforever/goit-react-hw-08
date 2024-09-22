import css from "./Error.module.css";

const Error = () => {
  return (
    <div className={css.errorWrapper}>
      <p className={css.errorText}>Упс! Произошла ошибка. Попробуйте позже.</p>
    </div>
  );
};

export default Error;
