import styled from "styled-components"
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from "react-icons/fa"

export const Navv = styled.nav`
  background: #FF8C00;
  height: 80px;
  display: flex; 
  /*justify-content: space-between;*/
 
  z-index: 10;
  justify-content: flex-start;
`;

export const NavLink = styled(Link)`
  color: grey;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: white;
  }`;


export const Bars = styled(FaBars)`
  display: none;
  color: grey;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  } `;   


export const NavMenu = styled.div`
  display: flex;
  align-items: left;
  /*margin-right: -24px;*/
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
   width: 100vw;
  white-space: nowrap; 
  @media screen and (max-width: 768px) {
    display: none;
  }
  `;
  
