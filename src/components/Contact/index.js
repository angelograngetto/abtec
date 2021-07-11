import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import Facebook from '../Icons/Facebook'
import Instagram from '../Icons/Instagram'
import styles from './contact.module.css'

const Contact = () => {
  const [email, setEmail] = useState('')
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [submited, setSubmited] = useState(false)
  const [captcha, setCaptcha] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!submited && captcha) {
      fetch(`https://abtecstudio.com.ar/send_email.php?nombre=${nombre}&email=${email}&telefono=${telefono}&mensaje=${mensaje}`)
        .then(res => {
          if (res.status === 200) {
            setEnviado(true)
            setSubmited(true)
          }
        })
    }
  }

  const handleCaptcha = (value) => {
    if (value) {
      setCaptcha(true)
    }
  }

  return (
    <section>
      <h2>Contacto</h2>
      <div className={styles.contact}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre">Tu nombre:</label>
          <input
            onChange={e => setNombre(e.target.value)}
            type="text"
            placeholder="Juan Perez"
            minLength="5"
            maxLength="100"
          />
          <label htmlFor="email">Tu email:</label>
          <input
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="email@dominio.com"
            minLength="5"
            maxLength="100"
          />
          <label htmlFor="telefono">Tu teléfono:</label>
          <input
            onChange={e => setTelefono(e.target.value)}
            name="telefono"
            type="tel"
            placeholder="+5491234567"
            minLength="8"
            maxLength="30"
          />
          <label htmlFor="mensaje">Tu mensaje:</label>
          <textarea
            onChange={e => { setMensaje(e.target.value) }}
            name="mensaje"
            cols="30"
            rows="10"
            minLength="20"
            maxLength="500"
            placeholder="Tu mensaje"></textarea>
            <small>{mensaje.length}/500</small>
          <ReCAPTCHA
            sitekey="6Lez2okbAAAAAFgDnoWId-Abe25QqolZNhXTv_3u"
            size="compact"
            theme="dark"
            onChange={handleCaptcha}
            />
          {enviado ? <small className={styles.enviado}>Mensaje enviado con éxito. Nos pondremos en contacto en breve. </small> : ''}
          <button>Enviar</button>
        </form>
        <div>
          <h4>También podés contactarnos por nuestras redes sociales:</h4>
            <div className={styles.social}>
              <a rel="noreferrer" target="_blank" href="https://www.facebook.com/abtec.studio/"><Facebook width={40} height={40}/> @abtec.studio</a>
              <a rel="noreferrer" target="_blank" href="https://www.instagram.com/abtec.studio/"><Instagram width={40} height={40}/> @abtec.studio</a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
