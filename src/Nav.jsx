import img from './assets/nav.png'
import burger from './assets/burgerbar.png'

const Nav =({setToggleMenu}) => {
    return (
        <div className="navbar container">
            <img src={img} alt="" />


<a className='ategi'  href="#">
    <img className='bur' onClick={() => setToggleMenu(false)} src={burger} alt="" />
</a>

            <div className="link">
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Prices</a>
                <a href="">Rules</a>
                <button>Get Started Now</button>
            </div>
        </div>
    )
}




export default Nav