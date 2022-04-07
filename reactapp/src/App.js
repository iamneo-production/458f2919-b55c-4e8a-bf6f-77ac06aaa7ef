import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/products/Home";
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Homee from './pages';
function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        
      </Switch>
      </div>
    </Router>
  );
}

export default App;
