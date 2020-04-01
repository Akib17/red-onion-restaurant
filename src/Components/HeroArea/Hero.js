import React from 'react';
import './Hero.scss'

const Hero = () => {
    return (
        <div className="Hero text-center">
            <h2>Best food waiting for your belly</h2>
            <div className="col-md-4 mx-auto">
                <div className="form-group d-flex search-form">
                    <input type="text" placeholder="Search food items" className="form-control" />
                    <input className="search-btn" type="submit" value="Search" />
                </div>
            </div>
        </div>
    );
};

export default Hero;