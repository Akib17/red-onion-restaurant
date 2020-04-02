import React from 'react';

const CartContext = React.createContext()
const CartDataProvider = CartContext.Provider
const CartDataReceiver = CartContext.Consumer

export {CartDataProvider, CartDataReceiver}