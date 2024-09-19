import css from "./Greeting.module.css";

const Greeting = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Welcome to Your Contact Manager!</h1>
      <p className={css.message}>
        We're thrilled to have you on board! Manage all your contacts with ease and efficiency.
          Let’s dive in and get started!
      </p>
    </div>
  );
};

export default Greeting;
