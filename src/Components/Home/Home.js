import React from 'react';
import Header from '../Header/Header';
import Hero from '../HeroArea/Hero';
import FoodShow from '../FoodCategory/FoodShow';
import AllFoods from '../AllFoods/AllFoods';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FoodNav from '../FoodCategory/FoodNav';
import FoodRoute from '../FoodCategory/FoodRoute';
import Breakfast from '../FoodItems/Breakfast';
import Lunch from '../FoodItems/Lunch';
import Dinner from '../FoodItems/Dinner';

const Home = () => {
    return (
        <div>
            <Router>
                <Route path="/" component={Hero}></Route>
                <Route path="/" component={FoodNav}></Route>
                <Route path="/" component={Breakfast} ></Route>
                <Route path="/breakfast" component={Breakfast} ></Route>
                <Route path="/lunch" component={Lunch} ></Route>
                <Route path="/dinner" component={Dinner} ></Route>
            </Router>
        </div>
    );
};

export default Home;