import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AddLevel extends React.Component{
    render(){
        return(
            <div>
                <div className="content-Grid">
    <header> </header>
    <div className="headTitle">INCLUNAV</div> 
    <div className="help btn" onclick="funHelp()"> Help</div>
<div className="profile btn" onclick="funProfile()">Profile</div>
    <div className="map">
      Upload Floor Map
      <div className="xaxis"></div>
      <div className="xvalue">X-Axis (width) :&nbsp;60 m</div>
      <div className="yaxis"></div>
      <div className="yvalue">Y-Axis (Length) :&nbsp;40 m</div>
    </div>
    
    <div className="inDetails"></div>
    
    <div className="div4">
      Level Number *
      <div className="text"> </div>
    </div>
    <div className="div5">
      Level Name
      <div className="text"></div>
    </div>
    <div className="div6">
      Organisation
      <div className="text"></div>
    </div>
    <div className="div7">
<div className="save btn" ><Link to="/Editmap">Next</Link></div>
<div className="cancel btn" ><Link to="/BuildingDash">Cancel</Link></div>
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
export default AddLevel