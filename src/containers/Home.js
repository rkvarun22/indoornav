import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="content-Grid">
    <header>
        
    </header>
    <div className="headTitle">INCLUNAV</div>
    <div className="loginLogo"></div>
    <div className="loginBrand">Annotation Tool</div>
    <div className="loginEmail"> Enter your email id</div>
    <div className="loginPass">Enter your password</div>
    <div className="loginControl">Forgot Password ?
      <div className="loginButton btn"><Link to="/Dashboard"> Sign In </Link></div>
    </div>
    <div className="loginGoogle btn">Sign In with Google</div>
    <div className="loginSignUp" >Don't have an account ?
      <div className="loginSignUp btn" style={{fontWeight: "600"}}><Link to="/SignUp">Sign Up </Link></div>
    </div>
    </div>
  </div>
        )
    }
}
export default Home