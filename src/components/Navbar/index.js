import React, { useState } from 'react'
import styles from './navbar.module.css'
import Logo from '../Icons/Logo'
import Hamburguer from '../Icons/Hamburguer'
import Close from '../Icons/Close'

const MENU = [
  {
    title: 'Inicio',
    href: '/'
  },
  {
    title: '¿Quiénes somos?',
    href: '#about'
  },
  {
    title: 'Clientes',
    href: '#clientes'
  },
  {
    title: 'Contacto',
    href: '#contacto'
  }
]

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false)

  const handleClick = (anchor) => {
    anchor === true ? setMenuActive(false) : setMenuActive(!menuActive)
  }

  return (
    <>
      <nav className={styles.navbar}>
        <a href="#">
          <Logo width={40} height={40}/>
        </a>
        <button
          onClick={handleClick}
          className={styles.btn_responsive}
        >
          <Hamburguer width={30} height={30}/>
        </button>
        <button
          onClick={handleClick}
          className={styles.btn_close + ' ' + (menuActive ? styles.active : '')}
        >
          <Close width={20} height={20}/>
        </button>
        <ul className={styles.menu + ' ' + (menuActive ? styles.active : '')}>
          {MENU.map(menu => (
            <li key={menu.title}>
              <a onClick={() => handleClick(true)} href={menu.href}>{menu.title}</a>
            </li>
          ))}
          <div className={styles.menu_logo}>
            <Logo width={45} height={45}/>
          </div>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
