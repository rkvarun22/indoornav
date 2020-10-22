import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AddBuilding extends React.Component{
    render(){
        return(
            <div>
                <div className="content-Grid">
    <header> </header>
    <div className="headTitle">INCLUNAV</div> 
    <div className="help btn" onclick="funHelp()"> Help</div>
<div className="profile btn" onclick="funProfile()">Profile</div>
    <div className="map"></div>
    <div className="mapControl"></div>
    <div className="inDetails"></div>
    <div className="coord">28.5450° N,   77.1926° E</div>
    <div className="bname">
      Building Name*
      <div className="text"> </div>
    </div>
    <div className="orientation">
      Orientation*
      <div className="text"></div>
    </div>
    <div className="refPoints">
      Reference Points*
      <div className="text"></div>
    </div>
    <div className="Type">
      Type
      <div className="text"></div>
    </div>
    <div className="organ">
      Organisation
      <div className="text"></div>
    </div>
    <div className="div6">
<div className="save btn" ><Link to="/BuildingDash">Save</Link></div>
<div className="cancel btn" ><Link to="/VenueDash">Cancel</Link></div>
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
export default AddBuilding