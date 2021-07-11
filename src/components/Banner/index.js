import React, { useState } from 'react'
import styles from './banner.module.css'

import Instagram from '../Icons/Instagram'
import Facebook from '../Icons/Facebook'
import ArrowDown from '../Icons/ArrowDown'
import Account from '../Icons/Account'

const Banner = () => {
  const [error, setError] = useState(false)

  const handleClick = () => {
    setError(true)
  }
  return (
    <header>
      <section className={styles.banner}>
        <button onClick={handleClick} className={styles.area}> <Account width={20} heigth={20}/> Area clientes</button>
        {error ? <small className={styles.area_error}>Area clientes no habilitada.</small> : ''}
        <h1>Bienvenid@ a <br /> <b>ABTEC Studio</b></h1>
        <p>Desarrollamos software • Optimizamos tu negocio</p>
        <ul className={styles.social}>
          <li>
            <a rel="noreferrer" target="_blank" href="https://instagram.com/abtecstudio">
              <Instagram width={20} height={20}/>
            </a>
          </li>
          <li>
            <a rel="noreferrer" target="_blank" href="https://www.facebook.com/abtec.studio/">
              <Facebook width={20} height={20}/>
            </a>
          </li>
        </ul>
        <a className={styles.conocenos} href="#about"> Conocenos <ArrowDown width={10} height={10}/></a>
      </section>
    </header>
  )
}

export default Banner
