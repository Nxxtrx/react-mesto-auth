import Header from "./Header"

export default function Register() {
  return (
    <>
    <Header />
    <div className="authorization">
      <h1 className="authorization__title">Регистрация</h1>
      <form className="authorization__form">
        <input className="authorization__input authorization__input_type_email" type="email" placeholder="Email"/>
        <input className="authorization__input authorization__input_type_password" type="password" placeholder="Пароль"/>
        <button className="authorization__button authorization__button_type_submit" type="submit">Зарегистрироваться</button>
      </form>
      <p className="authorization__login-in">Уже зарегистрированы? &nbsp;<a className="authorization__entry-link" href="#">Войти</a></p>
    </div>
  </>
  )
}
