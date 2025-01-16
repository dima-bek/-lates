import React from 'react'
import fi from './assets/fi.png'
function Sur() {
    return (
        <div id='con' className='container'>
            <h4>Our Pricing</h4>
            <h1 className='ht'>Choose Your Plan</h1>
            <div id='card'>
            <div id="cart">
                <img src={fi} alt="" />
                <h3>Basic</h3>
                <h2 className='hp'>$50.00 / Per Hour</h2>
                <p>
                ✔10 users included
                </p>
                <p>✔ 2 GB of storage</p>
                <p>✔ Email support</p>
                <p>✔ Help center access</p>
                <p>✔ 10 users included</p>
                <button>Get Started Now</button>
            </div>
            <div id="cart">
                <img src={fi} alt="" />
                <h3>Standard</h3>
                <h2 className='hp'>$95.00  / Per Hour</h2>
                <p>
                ✔10 users included
                </p>
                <p>✔ 2 GB of storage</p>
                <p>✔ Email support</p>
                <p>✔ Help center access</p>
                <p>✔ 10 users included</p>
                <button>Get Started Now</button>
            </div>
            <div id="cart">
                <img src={fi} alt="" />
                <h3>Premium</h3>
                <h2 className='hp'>$120.00  / Per Hour</h2>
                <p>
                ✔10 users included
                </p>
                <p>✔ 2 GB of storage</p>
                <p>✔ Email support</p>
                <p>✔ Help center access</p>
                <p>✔ 10 users included</p>
                <button>Get Started Now</button>
            </div>
            </div>
        </div>
        
    )
}

export default Sur
