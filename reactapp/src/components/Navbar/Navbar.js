import React, { Component } from 'react';
import {MenuItems} from './Menu';
import './Navbar.css';

class Navbar extends Component{
    render(){
        return(
            <div className="body">
            <br></br>
            <nav className="NavbarItems">
                <h1 className="Head">Food Fox</h1>
                <div className='Menu'>

                </div>
                <ul className='nav-menu'>
                    {MenuItems.map((item,index)=>{
                        return(
                            
                            <li key={index} spacing="compact">
                                <a className={item.cName} href={item.url} >
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
                
            </nav>
            </div>
        )
    }
}

export default Navbar;