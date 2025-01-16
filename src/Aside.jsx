import React from 'react'
import as from './assets/aside.png'
function Section() {
    return (
        <header className='container'>

            <div className="texts">
                <h4>About XBOX, PS</h4>
                <h1 className='ht'>The New Xbox, Ps<br />
                    Series</h1>
                <p>
                    It is a long established fact that a reader will be distracted by <br /> the readable content of a page when looking at its layout. The <br /> point of using Lorem Ipsum is that it has a more-or-less normal <br /> distribution of letters as opposed.
                </p>
                <button>Get Started Now</button>
            </div>
            <img src={as} alt="" />
        </header>
    )
}

export default Section
