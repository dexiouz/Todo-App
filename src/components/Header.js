import React from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import '../App.css'
const Header = (props) => {
   return (
     <div>
       <h2>{props.title}</h2>
       <NavLink activeClassName="am-active" to="/" exact = { true }>Todo App</NavLink>
       <NavLink activeClassName="am-active" to="/likesApp" >Likes App</NavLink>
       <NavLink activeClassName="am-active" to="/localstorage" >Local Storage</NavLink>
     </div>
  );
}
export default Header;