import React from "react"

export default function Login({onAuthUser}) {
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
    onAuthUser(formValue.password, formValue.email)
    setFormValue({email: '', password: ''});
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
