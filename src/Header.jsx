import React from 'react'
import header from './assets/header.png'
function Header() {
  return (
    <header className='container'>
        <div className="texts">
        <h4>Gaming Consoles</h4>
        <h1 className='ht'>Try It, Rent It</h1>
        <h1> Save $50!</h1>
        <p>
        It is a long established fact that a reader will be distracted by <br /> the readable content of a page when looking at its layout. The <br /> point of using Lorem Ipsum is that it has a more-or-less normal <br /> distribution of letters as opposed.
        </p>
        <button>Get Started Now</button>
        </div>
        <img  src={header} alt="" />
    </header>
  )
}

export default Header;