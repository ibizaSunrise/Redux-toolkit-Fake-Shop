import React from 'react';
import Home from './pages/Home.js'
import Header from './components/Header'
import Search from './pages/Search.js'
import Cart from './pages/Cart.js'
import Like from './pages/Like.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/like" component={Like} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
