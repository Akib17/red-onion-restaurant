import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import FoodDetails from './Components/FoodDetails/FoodDetails';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/food/:itemKey" component={FoodDetails} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
