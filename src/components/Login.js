// import React from 'react';

const Login = () => {
  return (
    <main className="login">
      <h2 className="login__title">Вход</h2>
      <form action="" className="form">
        <input
          type="email"
          className="form__email form__input
          form__input_type_login"
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="form__password form__input form__input_type_login"
          placeholder="Пароль"
          required
          minLength="8"
        />
        <button
          className="login__submit form__submit button button_type_save button_type_login-submit"
          type="submit"
        >
          Войти
        </button>
      </form>
    </main>
  );
};
export default Login;
