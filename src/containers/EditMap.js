import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditMap extends React.Component{
    render(){
        return(
            <div>
                <div className="content-Grid">
    <header> </header>
    <div className="headTitle">INCLUNAV</div> 
    <div className="help btn" onclick="funHelp()"> Help</div>
<div className="profile btn" onclick="funProfile()">Profile</div>
    <div className="mapEdit">      
    </div>
    <div className="mapContrl">
      <div className="control btn">Zoom</div>
      <div className="control btn">Rotate</div>
      <div className="control btn">Crop</div>
      <div className="controlP btn" ><Link to="/Annotate">&nbsp;&nbsp;&nbsp;&nbsp; Save &nbsp;&nbsp;&nbsp;&nbsp;</Link></div>
      <div className="control btn" ><Link to="/AddLevel">&nbsp;&nbsp;Cancel&nbsp;&nbsp;</Link></div>
    </div>
    <div id="help" className="divHelp noDisplay">
      <p>Tutorials</p>
      <p>Manual</p>
      <p>Contact Us</p>
      <p>Feedback</p>
  </div>
  <div id="profile" className="divProfile noDisplay">
      <p>Edit Profile</p>
      <p>Change Password</p>
      <p>Log Out</p>
  </div>
  </div>
            </div>
        )
    }
}
export default EditMap