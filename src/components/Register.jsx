import React from "react"
import { Link } from "react-router-dom";
import { useFormAndValidation } from "../hooks/useValidationInput";

export default function Register({onRegistrUser}) {

  const {values, errors, isValid, setIsValid, handleChange} = useFormAndValidation()
  const {email, password } = values

  React.useEffect(() => {
    if(!email && !password) {
      setIsValid(false)
    }
  }, [email, password])

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegistrUser(password, email)
  }

  return (
    <div className="authorization">
      <h1 className="authorization__title">Регистрация</h1>
      <form className="authorization__form" noValidate onSubmit={handleSubmit}>
        <input
          className="authorization__input authorization__input_type_email"
          type="email"
          placeholder="Email"
          name="email"
          minLength="3"
          required
          value={email || ""}
          onChange={handleChange}
        />
        <span className="authorization__input-error">{errors.email}</span>
        <input
          className="authorization__input authorization__input_type_password"
          type="password"
          placeholder="Пароль"
          name="password"
          minLength="3"
          required
          value={password || ""}
          onChange={handleChange}
        />
        <span className="authorization__input-error">{errors.password}</span>
        <button
          className={`authorization__button ${isValid ? "" : "authorization__button_type_inactive"}`}
          type="submit"
          disabled={!isValid}
        >
          Зарегистрироваться
        </button>
      </form>
      <p className="authorization__login-in">
        Уже зарегистрированы? &nbsp;
        <Link className="authorization__entry-link" to="/sign-in">
          Войти
        </Link>
      </p>
    </div>
  );
}
