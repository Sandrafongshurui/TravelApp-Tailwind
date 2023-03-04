import './App.css'
import React from 'react'
import {NavBar} from './Components/NavBar'
import { LinksBar } from './Components/LinksBar'
import {Login} from './Components/Login'
import Hero from './Components/Hero'
import Activites from './Components/Activites'
import Booking from './Components/Booking'
import Gallery from './Components/Gallery'
import ContactForm from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <NavBar />
      {/* <LinksBar/> */}
      {/* <Login/> */}
      <Hero/>
      <Activites/>
      <Booking/>
      <Gallery/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default App
