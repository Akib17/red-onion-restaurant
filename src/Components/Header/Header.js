import React, { useState } from 'react';
import logo from './../../logo2.png'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link, withRouter } from 'react-router-dom';
import { useEffect } from 'react';

const Header = () => {
    const [cartLength, setCartLength] = useState()
    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('items'))
        if (cartItems) {
            const cartItemsLength = cartItems.map(li => li)
            setCartLength(cartItemsLength.length)
        }
    }, [])

// console.log(cartItemsLength.length)
return (
    <div className="container Header">
        <div className="row">
            <div className="col-md-3">
                <Link to="/"><img src={logo} alt="Logo" /></Link>
            </div>
            <div className="col-md-9">
                <nav className="text-right">
                    <ul>
                        <Link className="cart" to="/cart"><li><FontAwesomeIcon icon={faCartPlus} /> <span className="badge badge-danger">
                            {cartLength > 0 ? cartLength : '0'}
                        </span> </li></Link>
                        <li>Login</li>
                        <li className="red-btn">Sign up</li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
);
};

export default withRouter(Header);