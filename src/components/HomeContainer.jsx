import React from 'react'
import backgroundImage from '../static/assets/images/background/Masked_eyes.jpg';

export const HomeContainer = () => {
    return (
        <div className="HomeContainer-wrapper">

            <div className="HomeContainer-gallery" style={{ backgroundImage: `url(${backgroundImage})` }}>

                <div className="HomeContainer-button">

                    <div className="HomeContainer-button__left">
                        <button>Arrow</button>
                    </div>

                    <div className="HomeContainer-button__right">
                        <button>Arrow</button>
                    </div>
                </div>

            </div>




        </div>
    )
}
