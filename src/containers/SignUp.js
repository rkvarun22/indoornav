import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SignUp extends React.Component{
      render(){
        return(
            <div>
            
            <div className="content-Grid">
            <header></header>
            <div className="headTitle">INCLUNAV</div>
            <div className="loginLogo"></div>
            <div className="loginBrand">Annotation Tool</div>
            <div className="firstname">First Name</div>
            <div className="lastname">Last Name</div>
            <div className="org">Organisation</div>
            <div className="email">Email Id</div>
            <div className="pass"> Password</div>
            <div className="cnfPass"> Confirm Password</div>
            <div className="clear">Clear All </div>
            <div className="signUp btn" style={{fontWeight: "600"}}><Link to="/Dashboard"> Sign Up </Link> </div>
          </div>
            </div>
            
            )
    }
}
export default SignUp