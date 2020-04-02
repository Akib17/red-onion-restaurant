import React from 'react';
import './SingleFoodItem.scss'
import { Link } from 'react-router-dom';

const SingleFoodItem = (props) => {
    const { id, img, name, desciption, price, subtitle } = props.data
    return (
        <div className="col-md-3 text-center my-4 food-item">
            <Link to={'/food/'+id}>
                <img className="w-75" src={img} alt="" />
                <p className="name"> {name} </p>
                <p className="desc"> {subtitle} </p>
                <p className="price"> ${price} </p>
            </Link>
        </div>
    );
};

export default SingleFoodItem;