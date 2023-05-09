import Header from "./Header"

export default function Login() {
  return (
    <>
      <Header />
      <div className="authorization">
        <h1 className="authorization__title">Вход</h1>
        <form className="authorization__form">
          <input className="authorization__input authorization__input_type_email" type="email" placeholder="Email"/>
          <input className="authorization__input authorization__input_type_password" type="password" placeholder="Пароль"/>
          <button className="authorization__button authorization__button_type_submit" type="submit">Войти</button>
        </form>
      </div>
    </>
  )
}
