import React from 'react';

const Cart = () => {
    const cartItems = JSON.parse(localStorage.getItem('items'))
    const singleItem = cartItems.map(li => li)
    return (
        <div>
            <h2> {singleItem.length} </h2>
        </div>
    );
};

export default Cart;