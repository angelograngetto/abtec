import React, { useEffect, useState } from 'react'
import styles from './clients.module.css'
import clientes from '../../clients'

const REVIEWS = [
  {
    review: 'Excelente trabajo. Quedé satisfecha con mi tienda online. Muy cómodo trabajar con los chicos. Recomendado.'
  },
  {
    review: 'Construyeron un sistema desde cero en menos de un mes y la verdad que estoy contento por los resultados.'
  }
]

const Clients = () => {
  const [rev, setRev] = useState([REVIEWS[0]])

  useEffect(() => {
    let count = 0
    const interval = setInterval(() => {
      if (REVIEWS.length > count) {
        setRev([REVIEWS[count]])
        count++
      } else {
        setRev([REVIEWS[0]])
        count = 0
      }
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className={styles.clients}>
      <h2>Clientes</h2>
      <p>Estos son algunos de los clientes que confiaron en nosotros 😄</p>
      <div className={styles.clients__cards}>
        {clientes.map(cliente => (
          <div className={styles.clients__card} key={cliente.id}>
            <img src={cliente.imgURL} alt={cliente.name}/>
            <small>{cliente.description}</small>
          </div>
        ))}
      </div>
        {
          rev.map(review => (
            <div key={review.review} className={styles.review}>
              <p>{review.review}</p>
            </div>
          ))
        }
      <a href="https://instagram.com/abtec.studio">Conocé más sobre nuestros trabajos en Instagram</a>
    </section>
  )
}

export default Clients
