import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import logo from "./images/logo.png";
import Merchant from './Merchant';
import FAQ from './FAQ';
import SignUp from './SignUp';
import Login from './Login';
import './Header.css'
export default function Header() {
    const[click,setClick] = useState(false);
    const handleClick = () => setClick(!click)
  return (
      <div>
          
          <Router>

          <header>
                <nav className='navbar'>
                    <div className="logo">
                        <img src={logo} alt="logo" />    
                    </div>    
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className='nav-item'><Link to="/" onClick={handleClick}  className='nav-link Home' >Merchant</Link></li>
                        <li className='nav-item'><Link to="/FAQ" onClick={handleClick}  className='nav-link' >FAQ</Link></li>
                        <li className='nav-item'><Link to="/SignUp" onClick={handleClick}  className='nav-link' href="">SignUp</Link></li>
                        <li className='nav-item'><Link to="/Login" onClick={handleClick}  className='nav-link' href="">Login</Link></li>
                    </ul>

                    <div onClick={handleClick} className="nav-icon">
                    <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                </div>

                </nav>  

                <div className="infos">
                    <h1>Buy Electricity from the comfort of <br /> your home</h1>
                    <h3>Enter your phone number to begin</h3>
                    <input type="text" placeholder="0000-000-00"/><br />
                    <button>buy Electricity now</button>
                </div>
            </header> 
            <Routes>
                    <Route path='/' element={<Merchant />}></Route>
                    <Route path='/FAQ' element={<FAQ />}></Route>
                    <Route path='/SignUp' element={<SignUp />}></Route>
                    <Route path='/Login' element={<Login />}></Route>
                </Routes> 

          </Router>
      </div>
   
  )
}
