import React from 'react'
import styles from './about.module.css'

import ReactIcon from '../Icons/ReactIcon'
import Angular from '../Icons/Angular'
import Python from '../Icons/Python'
import Sass from '../Icons/Sass'
import Node from '../Icons/Node'

const About = () => {
  return (
      <section id="about">
        <h2>¿Quiénes somos?</h2>
        <div className={styles.about}>
          <div>
            <p>
              Somos <strong className={styles.cyan}> &#123; ABTEC</strong> <strong className={styles.orange}>Studio &#125;</strong>. Nos dedicamos a realizar soluciones tecnológicas para negocios/emprendimientos. Desarrollamos sitios webs o
              tiendas online para llevar sus proyectos a la realidad integrándolos en la era del internet con diseños que están a la vanguardia.
              Además brindamos a nuestros clientes software de alta calidad para una mejor administración de acuerdo a sus necesidades utilizando
              las mejores teconológias del momento. Todo esto con gran rapidez para que puedan ver sus resultados lo más pronto posible, sin perder
              calidad en su producto final y a un costo accesible.
            </p>
            <div className={styles.tech}>
              <ReactIcon width={60} fill="#292929"/>
              <Angular width={60} fill="#292929"/>
              <Sass width={60} fill="#292929"/>
              <Python width={60} fill="#292929"/>
              <Node width={60} fill="#292929"/>
            </div>
          </div>
          <iframe src="https://www.instagram.com/p/CN06G_pjopt/embed" scrolling="no" allowtransparency="true"></iframe>
        </div>
      </section>
  )
}

export default About
