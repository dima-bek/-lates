import React from 'react'
import close from './assets/close.png'
const Burger = ({ toggleMenu, setToggleMenu }) => {
  return (
    <aside  className={toggleMenu == true ? "show-burger" : ""} >
      <a onClick={() => setToggleMenu(true)} href="#">
        <img className='close' src={close} alt="" />
      </a>
      <h2>Pages:</h2>
      <a href="">home</a>
      <a href="">about us</a>
      <a href="">prices</a>
      <a href="">rules</a>
    </aside>
  )
}

export default Burger