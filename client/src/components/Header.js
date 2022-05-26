import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import logo from "./images/logo.png"
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
                        <li className='nav-item'><Link to="/intro" onClick={handleClick}  className='nav-link' >FAQ</Link></li>
                        <li className='nav-item'><Link to="/call" onClick={handleClick}  className='nav-link' href="">Login</Link></li>
                        <li className='nav-item'><Link to="/projects" onClick={handleClick}  className='nav-link' href=""><Button>Buy electricity Now</Button></Link></li>                    
                    </ul>

                    <div onClick={handleClick} className="nav-icon">
                    <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                </div>

                </nav>  
            </header> 
            <Routes>
                    <Route path='/' element={<home />}></Route>
                    <Route path='/Merchant' element={<Merchant />}></Route>
                    <Route path='/FAQ' element={<FAQ />}></Route>
                    <Route path='/Sign Up' element={<Sign Up />}></Route>
                    <Route path='/Login' element={<Login />}></Route>
                </Routes> 

          </Router>
      </div>
   
  )
}
