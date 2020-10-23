import React, { Component } from "react";
import {Link} from 'react-router-dom';

class LogInForm extends Component {
    render() {
        return(
            <div>
                <div class="header">            
            <div class="headerAnnotate">INCLUNAV</div>                       
        </div>
                <div id="divLogin">
            <img src="/assets/images/inclunav.png" alt="" class="loginLogo"/>
            <div id="loginHeader">Annotation Tool</div>
            <textarea class="cardTextArea" id="email" >&nbsp;&nbsp;Enter your Email-ID</textarea>
            <textarea class="cardTextArea" id="pass" >&nbsp;&nbsp;Password</textarea>
            <div id="loginControl">Forgot Password?
                <button class="cardButton" id="loginButton">Sign In</button>
            </div>
            <div id="loginGoogle">
                <div class="bar1"></div><div class="or">OR</div><div class="bar2"></div>
                <div><div class="cardButton" id="buttonGoogle"><img class="buttonIcon" src="/assets/images/google.png"/>&nbsp;&nbsp;Sign In with Google</div></div>
            </div>
            <div id="signUpControl">Don't have an account? <a style={{fontWeight: "600"}}><Link to="/SignUpForm">Sign Up</Link></a></div>
        </div>
        </div>
    
        )
    }
}
export default LogInForm