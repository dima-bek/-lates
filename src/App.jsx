import { useState } from 'react'
import Burger from './Burger'
import './index.css'
import Header from './Header'
import Section from './Section'
import Aside from './Aside'
import Head from './Head'
import Footer from './Footer'
import Nav from "./Nav"

const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div>
      <Nav
        setToggleMenu={setToggleMenu}
      />
      <Burger
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <Header/>
      <Section/>
      <Aside/>
      <Head/>
      <Footer/>
    </div>
  )

}



export default App

