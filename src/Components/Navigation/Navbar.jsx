import React from 'react'
import './Navbar.css';

const NavBar = () => {
    return(
        
        <div className="NavBar">
        <nav>
        <div className="Pages">
            <div className="Home">
            <a href="/src/App.js">Home</a>
            <span className="selected selectedHome"></span>
            </div>
            <div className="HowItWorks">
            <a href="/src/HowItWorks/HowItWorks.js">How It Works</a>
            <span className="selected selectedHowItWorks"></span>            
            </div>
            <div className="LogIn">
            <a href="/src/LogIn/LogIn.js">Log In</a>
            <span className="selected selectedLogIn"></span>
            </div>
            <div className="SignUp">
            <a href="/src/SignUp/SignUp.js" className="SignUpA">Sign Up</a></div>
            </div>
        </nav>
        </div>
    )
}
export default NavBar;