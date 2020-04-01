import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './FoodNav.scss'

const FoodNav = () => {
    return (
        <div className="Food-item-nav">
            <nav className="food-nav">
                <ul>
                    <li> <NavLink exact className="navStyle" activeClassName="navLink" to="/breakfast">Breakfast</NavLink> </li>
                    <li> <NavLink exact className="navStyle" activeClassName="navLink" to="/lunch">Lunch</NavLink> </li>
                    <li> <NavLink exact className="navStyle" activeClassName="navLink" to="/dinner">Dinner</NavLink> </li>
                </ul>
            </nav>
        </div>
    );
};

export default FoodNav;