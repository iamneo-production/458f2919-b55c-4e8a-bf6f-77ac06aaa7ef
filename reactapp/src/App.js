import React from 'react';
import './App.css';
import Home from './Home'
import Orders from "./components/Orders"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (

    <div class="App">
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/orders' element={<Orders/>} />
     </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
