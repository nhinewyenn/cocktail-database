import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
import Nav from './components/Nav';
import Landing from './components/Landing';

function App() {
  return (
    <Router>
      <Landing />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/cocktail/:id" component={SingleCocktail} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
