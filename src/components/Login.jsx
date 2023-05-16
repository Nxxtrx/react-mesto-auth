import React from "react"
import { useFormAndValidation } from "../hooks/useValidationInput";

export default function Login({onAuthUser}) {

  const {values, errors, isValid, setIsValid, handleChange} = useFormAndValidation()

  const {email, password} = values

  React.useEffect(() => {
    if(!email && !password) {
      setIsValid(false)
    }
  }, [email, password])

  const handleSubmit = (e) => {
    e.preventDefault();
    onAuthUser(password, email)
  }

  return (
    <div className="authorization">
      <h1 className="authorization__title">Вход</h1>
      <form className="authorization__form" onSubmit={handleSubmit}>
        <input
          className="authorization__input authorization__input_type_email"
          type="email"
          placeholder="Email"
          name="email"
          required
          minLength='3'
          value={email || ''}
          onChange={handleChange}
        />
        <span className="authorization__input-error">{errors.email}</span>
        <input
          className="authorization__input authorization__input_type_password"
          type="password"
          placeholder="Пароль"
          name="password"
          required
          minLength='3'
          value={password || ''}
          onChange={handleChange}
        />
        <span className="authorization__input-error">{errors.password}</span>
        <button
          className="authorization__button authorization__button_type_submit"
          type="submit"
          disabled={!isValid}
        >
          Войти
        </button>
      </form>
    </div>
  );
}
