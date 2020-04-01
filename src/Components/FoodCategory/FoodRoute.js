import React from 'react';
import Breakfast from '../FoodItems/Breakfast';
import Lunch from '../FoodItems/Lunch';
import Dinner from '../FoodItems/Dinner';
import { Route } from 'react-router-dom';

const FoodRoute = () => {
    return (
        <div>
            <Route exact path="/" component={Breakfast} ></Route>
            <Route exact path="/breakfast" component={Breakfast} ></Route>
            <Route path="/lunch" component={Lunch} ></Route>
            <Route path="/dinner" component={Dinner} ></Route>
        </div>
    );
};

export default FoodRoute;