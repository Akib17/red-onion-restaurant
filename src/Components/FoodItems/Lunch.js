import React from 'react';
import LunchData from '../../FakeData/LunchData';

const Lunch = (props) => {
    const lunchData = LunchData.map(li => li)

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                {
                    lunchData.map(el => (
                        <div className="col-md-3 text-center my-4 food-item">
                            <img className="w-75" src={el.img} alt="" />
                            <p className="name"> {el.name} </p>
                            <p className="desc"> {el.desc} </p>
                            <p className="price"> ${el.price} </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Lunch;