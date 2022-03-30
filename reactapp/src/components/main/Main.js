import React, { Component } from 'react';
import './Main.css';
import cb from '../Image/cb.png';
import meals from '../Image/meals.png';
import mb from '../Image/mb.png';
import cp from '../Image/cp.png';
import chb from '../Image/chb.png';
import cr from '../Image/cr.png';
import tr from '../Image/tr.png';
import lr from '../Image/lr.png';

class Main extends Component{
    render(){
        return(
            <div className='full'>
            <h1 className='heading'><b>Welcome to  FoodFox</b></h1>
               <div className='grid-container'>
                   <div id='grid1'>
                 <img src={cb} alt='Chicken Briyani'></img>
                     <p>Chicken Briyani</p><p>Rs.150</p>
                 </div>
                 <div id='grid2'>
                 <img src={meals} alt='meals'></img>
                     <p>Meals</p><p>Rs.100</p>
                 </div>
                 <div id='grid3'>
                 <img src={mb} alt='Mutton Briyani'></img>
                     <p>Mutton Briyani</p><p>Rs.200</p>
                 </div>
                 <div id='grid4'>
                 <img src={cp} alt='Chicken Pizza'></img>
                     <p>Chicken Pizza</p><p>Rs.250</p>
                 </div>
                 <div id='grid5'>
                 <img src={chb} alt='Chicken Burger'></img>
                     <p>Chicken Burger</p><p>Rs.100</p>
                 </div>
               </div> 
                <div className='grid-container2'>
                 <div id='grid6'>
                 <img src={cr} alt='curd rice'></img>
                     <p>Curd Rice</p><p>Rs.40</p>
                 </div>
                 <div id='grid7'>
                 <img src={tr} alt='tomato rice'></img>
                     <p>Tomato Rice</p><p>Rs.40</p>
                 </div>
                 <div id='grid8'>
                 <img src={lr} alt='lemon rice'></img>
                     <p>Lemon Rice</p><p>Rs.40</p>
                 </div>
                 
          
               



                </div>
  
            </div>
           
                
            
    
        )
    }
}

export default Main;