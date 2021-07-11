import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Clients from './components/Clients'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <About/>
      <Clients/>
      <Contact/>
    </>
  )
}
export default App
