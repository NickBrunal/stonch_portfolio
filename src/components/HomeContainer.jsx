import React from 'react'
import backgroundImage from '../static/assets/images/background/Masked_eyes.jpg';

export const HomeContainer = () => {
    return (
        <div className="HomeContainer-wrapper">

            <div className="HomeContainer-gallery" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="HomeContainer-left-button">
                    <div className="scroll-left">
                        <button>Arrow</button>
                    </div>
                </div>

                <div className="HomeContainer-right-button">
                    <div className="scroll-right">
                        <button>Arrow</button>
                    </div>
                </div>
            </div>


        </div>
    )
}
