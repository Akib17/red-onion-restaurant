import React from 'react';
import logo from './../../logo2.png'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <div className="container Header">
            <div className="row">
                <div className="col-md-3">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="col-md-9">
                    <nav className="text-right">
                        <ul>
                            <li><FontAwesomeIcon icon={faCartPlus} /></li>
                            <li>Login</li>
                            <li className="red-btn">Sign up</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;