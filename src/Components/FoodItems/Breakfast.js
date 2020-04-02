import React from 'react';
import './FoodItems.scss'
import breakFast from '../../FakeData/BreakfastData';
import { Link } from 'react-router-dom';
import BreakfaseDesign from './BreakfaseDesign';

const Breakfast = (props) => {
    const Breakfast = breakFast.map(li => li)
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                {
                    Breakfast.map(li => <BreakfaseDesign data={li} ></BreakfaseDesign>)
                }
            </div>
        </div>
    );
};

export default Breakfast;