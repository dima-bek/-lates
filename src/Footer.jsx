import img from './assets/nav.png'
import fac from './assets/fo1.png'
import fa from './assets/fo2.png'
import fo from './assets/fo3.png'

function Footer() {
  return (
    <footer className='container'>
        <img src={img} alt="" />
        <p>Copyright © 2022 HEALAS.LT. All Rights Reserved.</p>
        <div className='fi'>
    <img src={fac} alt="" />
    <img src={fa} alt="" />
    <img src={fo} alt="" />
        </div>
    </footer>
  )
}

export default Footer;