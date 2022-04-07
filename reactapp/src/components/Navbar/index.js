import React from 'react';
import {Navv,NavLink,Bars,NavMenu} from './NavbarElements';


const Navbar = () => {
  return (
    <>
        <Navv>
            <NavLink to="/">
                <h1>FoodFox</h1>
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to="/products" actuveStyle>
                    Products
                </NavLink>
                <NavLink to="/orders" actuveStyle>
                    Orders
                </NavLink>
            </NavMenu>
            
        </Navv>
    </>
  );
};

export default Navbar;