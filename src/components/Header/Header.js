import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import Home from './Home/Home';

const Header = () => {
    return (
     
     <div className="container header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img src={logo} alt=""/>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">Donation</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/eventtasks">Event</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">Blog</Link>
            </li>
            <button className="btn btn-primary mr-2">Register</button>
          <Link to="/admin"><button className="btn btn-primary">Admin</button></Link>
          </ul>
        </div>
      </nav>
      <div className="search mt-5">
         <div className="search-box">
         <h3> I GROW BY HELPING PEOPLE IN NEED</h3>
          <input className="w-75 ml-md-4 mt-3 py-1" placeholder="search..." type="text"/><span className="search-button">Search</span>
         </div>
      </div>

      <div className="homeStyle">
      <Home></Home>
      </div>
     </div>
  
    );
};

export default Header;