// import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <main className="registration">
      <h2 className="registration__title">Регистрация</h2>
      <form action="" className="form">
        <input
          type="email"
          className="form__email form__input
          form__input_type_register"
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="form__password form__input form__input_type_register"
          placeholder="Пароль"
          required
          minLength="8"
        />
        <button
          className="registration__submit form__submit button button_type_save button_type_registration-submit"
          type="submit"
        >
          Зарегистрироваться
        </button>
      </form>
      <p className="registration__redirect-text">
        Уже зарегистрированы?&nbsp;
        <Link to="/sign-in" className="registration__redirect-link hover">
          Войти
        </Link>
      </p>
    </main>
  );
};
export default Register;
