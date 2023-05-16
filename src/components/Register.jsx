import React from "react"
import { Link } from "react-router-dom";

export default function Register({onRegistrUser}) {
  const [formValue, setFormValue] = React.useState({email: '', password: ''})

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegistrUser(formValue.password, formValue.email)
  }

  return (
    <div className="authorization">
      <h1 className="authorization__title">Регистрация</h1>
      <form className="authorization__form" onSubmit={handleSubmit}>
        <input
          className="authorization__input authorization__input_type_email"
          type="email"
          placeholder="Email"
          name="email"
          value={formValue.email || ""}
          onChange={handleChange}
        />
        <input
          className="authorization__input authorization__input_type_password"
          type="password"
          placeholder="Пароль"
          name="password"
          value={formValue.password || ""}
          onChange={handleChange}
        />
        <button
          className="authorization__button authorization__button_type_submit"
          type="submit"
        >
          Зарегистрироваться
        </button>
      </form>
      <p className="authorization__login-in">
        Уже зарегистрированы? &nbsp;
        <Link className="authorization__entry-link" to='/sign-in'>Войти</Link>
      </p>
    </div>
  );
}
