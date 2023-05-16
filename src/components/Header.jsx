import { Link, Route, Routes } from 'react-router-dom'
import React from 'react'
import logo from '../images/header-logo.svg'


export default function Header({signOut, userEmail}) {

  return (
    <header className="header">
      <img src={logo} alt="Логотип место" className="header__logo" />
      <Routes>

        <Route
          path="/sign-up"
          element={
            <Link to="/sign-in" className="header__link">
              Войти
            </Link>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Link to="/sign-up" className="header__link">
              Регистрация
            </Link>
          }
        />
        <Route
          path="/"
          element={
            <div className="header__container">
              <p className="header__user">{userEmail}</p>
              <button className="header__output-btn" onClick={signOut}>
                Выйти
              </button>
            </div>
          }
        />

      </Routes>
    </header>
  );
}
