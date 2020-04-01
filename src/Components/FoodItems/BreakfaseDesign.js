import React from 'react';
import { Link } from 'react-router-dom';

const BreakfaseDesign = (props) => {
    const { id, img, name, desc, price } = props.data
    return (
        <div className="col-md-3 text-center my-4 food-item">
            <Link to={"/food/" + id}>
                <img className="w-75" src={img} alt="" />
                <p className="name"> {name} </p>
                <p className="desc"> {desc} </p>
                <p className="price"> ${price} </p>
            </Link>
        </div>
    );
};

export default BreakfaseDesign;