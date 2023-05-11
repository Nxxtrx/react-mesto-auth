import React from "react"
import { useNavigate } from "react-router-dom"
import * as auth from '../utils/auth.js'

export default function Login({onAvtorizationUser}) {
  const [formValue, setFormValue] = React.useState({email: '', password: ''})

  const navigate = useNavigate()

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }
  console.log(onAvtorizationUser)
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formValue.email || !formValue.password) {
      return;
    }

    auth.authorize(formValue.password, formValue.email).then((data) => {
      if (data) {
        setFormValue({email: '', password: ''});
        onAvtorizationUser();
        navigate('/')
      }
    })
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
          value={formValue.email || ''}
          onChange={handleChange}
        />
        <input
          className="authorization__input authorization__input_type_password"
          type="password"
          placeholder="Пароль"
          name="password"
          value={formValue.password || ''}
          onChange={handleChange}
        />
        <button
          className="authorization__button authorization__button_type_submit"
          type="submit"
        >
          Войти
        </button>
      </form>
    </div>
  );
}
