import css from "./Error.module.css";

const Error = () => {
  return (
    <div className={css.errorWrapper}>
      <p className={css.errorText}>Oops! Something went wrong. Please try again later.</p>
    </div>
  );
};

export default Error;
