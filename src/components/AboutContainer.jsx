import React from 'react'
import backgroundImage from '../static/assets/images/background/Sparks_flying.jpg';

export const AboutContainer = () => {
    return (
        <div className="AboutContainer-wrapper">

            <div className="AboutContainer-left-side"

                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />

            <div className="AboutContainer-right-side">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam vel ad debitis neque, blanditiis tempora modi voluptas assumenda totam architecto animi atque aperiam? Quo maiores omnis rem! Consectetur, debitis cupiditate? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa architecto quisquam ullam est, illo error dignissimos culpa id neque ut. Vitae, accusantium enim dolorem dicta velit quasi incidunt molestias harum.</p>
            </div>

        </div>
    )
}
