import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';
import Hero from './Components/HeroArea/Hero';
import FoodNav from './Components/FoodCategory/FoodNav';
import FoodRoute from './Components/FoodCategory/FoodRoute';
import FoodDetails from './Components/FoodDetails/FoodDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/food/:itemKey" component={FoodDetails} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
