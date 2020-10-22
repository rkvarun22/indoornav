import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class VenueDash extends React.Component{
    render(){
        return(
            <div>
                <div className="content-Grid">
    <header> </header>
    <div className="headTitle">INCLUNAV</div> 
    <div className="help btn" onclick="funHelp()"> Help</div>
<div className="profile btn" onclick="funProfile()">Profile</div>
    <div className="addVenue btn" ><Link to="/AddBuilding"> Add new Building</Link></div>
    <div className="DP">First name Last name</div>
    <div className="nav">
      Sample Venue 01
    </div>
    <div className="div6">
     <p className="btn" onclick="window.open('buildingDash.html')">Sample Building 1<br/><br/>
     Levels : 08
       <br/>
       Annotated Area : 100 sqm
     </p>
     <p></p>
     <div className="edit btn" ><Link to="/AddBuilding"> Edit </Link></div>
     <div className="delete btn" ><Link to="/DeleteBuilding">Delete</Link></div>
    </div>
    <div className="div7">
      <p>Sample Building 2<br/><br/>
        Levels : 04
          <br/>
          Annotated Area : 50 sqm
        </p>
        <p></p>
        <div className="edit btn"> Edit </div>
        <div className="delete btn">Delete</div>
    </div>
    <div className="div8">
      <p>Sample Building 3<br/><br/>
        Levels : 010
          <br/>
          Annotated Area : 1500 sqm
        </p>
        <p></p>
        <div className="edit btn"> Edit </div>
        <div className="delete btn">Delete</div>
    </div>
    <div className="div9"> <p>Sample Building 4<br/><br/>
      Levels : 03
        <br/>
        Annotated Area : 300 sqm
      </p>
      <p></p>
      <div className="edit btn"> Edit </div>
      <div className="delete btn">Delete</div></div>
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
export default VenueDash