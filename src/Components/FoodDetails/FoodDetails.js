import React from 'react';
import { useParams, Link } from 'react-router-dom';
import FakeData from '../../FakeData/FakeData';
import './FoodDetails.scss'
import { useState } from 'react';
import { useEffect } from 'react';
import Food from '../Food/Food';

const FoodDetails = () => {
    const { itemKey } = useParams()
    const item = FakeData.find(li => li.id == itemKey)
    const [count, setCount] = useState(1)
    const countHandlerPlus = () => {
        setCount(count + 1)
    }
    const countHandlerMinus = () => {
        if (count > 0) {
            setCount(count - 1)
        } else {
            setCount(1)
        }
    }
    const newCount = {
        count: count,
    }
    const newItem = { ...item, ...newCount }
    // console.log(newItem)
    const cartHandler = e => {
        if (localStorage.getItem('items') === null) {
            const items = []
            items.push(newItem)
            localStorage.setItem('items', JSON.stringify(items))
        } else {
            const items = JSON.parse(localStorage.getItem('items'))
            const filteredItems = items.filter(el => el.id !== item.id)
            filteredItems.push(newItem)
            localStorage.setItem('items', JSON.stringify(filteredItems))
        }
    }
    const totalPrice = newItem.count * newItem.price
    const items = JSON.parse(localStorage.getItem('items'))
    // const getCartItem = items.find(el => el.id === item.id)
    const [cartCount, setCartCount] = useState(0)
    const CartItemCount = (e) => {
        setCartCount(cartCount + 1)
    }
    const OnClick = (item) => {
        cartHandler(item)
        CartItemCount()
    }

    return (
        <div className="container FoodDetails">
            <div className="row">
                <div className="col-md-6 FoodDescription">
                    <h1> {item.name} </h1>
                    <p> {item.description} </p>
                    <div className="price-area d-flex">
                        <span> ${item.price} </span>
                        <p className="count"><span onClick={countHandlerMinus} className="count-btn">-</span> {count} <span onClick={countHandlerPlus} className="count-btn"> + </span> </p>
                    </div>
                    <Link to="/cart">
                        <button onClick={() => OnClick(item)} className="btn btn-danger">Add to cart</button>
                    </Link>

                    {
                        <div className="card mt-3 p-3 w-75 text-center"> Total price: {totalPrice.toFixed(2)} </div>
                    }

                </div>
                <div className="col-md-6">
                    <img className="food-img" src={item.img} alt="Food Image" />
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;