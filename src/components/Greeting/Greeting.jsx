import css from "./Greeting.module.css";

const Greeting = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Добро пожаловать в ваш менеджер контактов!</h1>
      <p className={css.message}>
        Мы рады видеть вас! Упрощайте управление контактами с легкостью и эффективностью.
        Давайте начнем!
      </p>
    </div>
  );
};

export default Greeting;
