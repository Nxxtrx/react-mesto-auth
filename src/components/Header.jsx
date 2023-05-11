import { Link, useLocation } from 'react-router-dom'
import React from 'react'
import logo from '../images/header-logo.svg'
import Register from './Register'

export default function Header({loggedIn, userEmail}) {

  const [isWindow, setIsWindow] = React.useState('')
  const [nameLink, setNameLink] = React.useState('')


  const location = useLocation()

  React.useEffect(() => {
    if(location.pathname === '/sign-up') {
      setIsWindow('/sign-up')
      setNameLink('авторизация')
    } else if(location.pathname === 'sign-in') {
      setIsWindow('/sign-in')
      setNameLink('ругистрация')
    } else {
      setNameLink('Выйти')
    }
  }, [location])

  return (
    <header className='header'>
      <img src={logo} alt='Логотип место' className='header__logo' />
      <div className='header__container'>
        <p className='header__user'>{loggedIn ? userEmail : ''}</p>
        <Link to={isWindow} className="header__link">{nameLink}</Link>
      </div>

    </header>
  )
}
