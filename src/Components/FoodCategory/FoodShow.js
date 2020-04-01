import React from 'react';
import FoodNav from './FoodNav';
import FoodRoute from './FoodRoute';
import { BrowserRouter } from 'react-router-dom';
import AllFoods from '../AllFoods/AllFoods';

const FoodShow = () => {
    return (
        <div>
            <BrowserRouter>
                <FoodNav></FoodNav>
                <FoodRoute></FoodRoute>
            </BrowserRouter>
        </div>
    );
};

export default FoodShow;