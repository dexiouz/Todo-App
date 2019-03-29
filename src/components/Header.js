import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../stylesheets/Header.css';
const Header = (props) => {
  return (
    <div className="headerContainer">
      <h2>{props.title}</h2>
      <ul>
        <li><NavLink activeClassName="am-active" to="/" exact={true}>Todo App</NavLink></li>
        <li><NavLink activeClassName="am-active" to="/likesApp" >Likes App</NavLink></li>
        <li><NavLink activeClassName="am-active" to="/localstorage" >Local Storage</NavLink></li>
      </ul>
    </div>
  );
}
export default Header;


// - added className to the holding div
// - used a ul to wrap navlinks




