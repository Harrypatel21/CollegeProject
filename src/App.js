import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preference';
import Notes from './Notes';
import Roadmaps from './components/pages/Roadmaps'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/notes'  component={Notes} />
          <Route path='/roadmaps'  component={Roadmaps} />

          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/preferences' component = {Preferences}/>
        </Switch>
      </Router>
     
    </>
  );
}

export default App;
