import React from 'react';
import { A } from 'hookrouter';

export const PortfolioContainer = () => {
    return (
        <div className="PortfolioContainer-wrapper">

            <div className="PortfolioContainer-links-wrapper">

                <div className="PortfolioContainer-links-wrapper__portrait">
                    <A href="/portrait">Portrait</A>
                </div>

                <div className="PortfolioContainer-links-wrapper__scenic">
                    <A href="/scenic">Scenic</A>
                </div>

                <div className="PortfolioContainer-links-wrapper__fine-art">
                    <A href="/fine-art">Fine Art</A>
                </div>

                <div className="PortfolioContainer-links-wrapper__black-white">
                    <A href="/black-white">Black & White</A>
                </div>
            </div>

            <div className="PortfolioContainer-gallery-wrapper">

                <div className="PortfolioContainer-gallery-image">
                    <img className='portfolio-image' src='http://via.placeholder.com/250x250' />
                </div>

                <div className="PortfolioContainer-gallery-image">
                    <img className='scenic-image' src='http://via.placeholder.com/250x250' />
                </div>

                <div className="PortfolioContainer-gallery-image">
                    <img className='fine-art-image' src='http://via.placeholder.com/250x250' />
                </div>

                <div className="PortfolioContainer-gallery-image">
                    <img className='black-white-image' src='http://via.placeholder.com/250x250' />
                </div>
            </div>

            <div className="GalleryContainer-button">

                <div className="GalleryContainer-button__left">
                    <button>Arrow</button>
                </div>

                <div className="GalleryContainer-button__right">
                    <button>Arrow</button>
                </div>
            </div>
        </div>
    )
}
