import React from 'react'
import './Learn.css'

import Crypto from '../../assets/trade.png'

const Learn = () => {
    return (
        <div className='signup'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Crypto} alt='' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>Unleashing Financial Potential World of Stocks.</h2>
                    <p>Dive into the dynamic realm of stocks and witness the pulse of global financial markets. Our platform provides real-time updates on stock prices.</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Learn More</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Learn
