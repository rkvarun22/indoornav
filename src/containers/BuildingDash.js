import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class BuildingDash extends React.Component{
    render(){
        return(
            <div>
                <div className="content-Grid">
    <header> </header>
    <div className="headTitle">INCLUNAV</div> 
    <div className="help btn" onclick="funHelp()"> Help</div>
    <div className="profile btn" onclick="funProfile()">Profile</div>
    <div className="addVenue btn" ><Link to="/AddLevel"> Add new Level</Link></div>
    <div className="DP">First name Last name</div>
    <div className="nav">
      <p>Sample Venue 01</p>
      <p>Sample Building 01</p>
    </div>
    <div className="div6">
     <p className="btn" onclick="window.open('annotate.html')">Sample Level 1<br/><br/>
      Level No : 0     
       <br/>
       Annotated Area : 100 sqm
     </p>
     <div className="public"><input type="checkbox"/> Public Access</div><br/>
     <div className="edit btn" ><Link to="/AddLevel"> Edit </Link></div>
     <div className="delete btn" ><Link to="/DeleteLevel">Delete</Link></div>
    </div>
    <div className="div7">
      <p>Sample Level 2<br/><br/>
        Level No : 1     
         <br/>
         Annotated Area : 50 sqm
       </p>
         <div className="public"> <input type="checkbox"/> Public Access </div><br/>
       <div className="edit btn" > Edit </div>
       <div className="delete btn" >Delete</div>
    </div>
    <div className="div8">
      <p>Sample Level 3<br/><br/>
        Level No : 3    
         <br/>
         Annotated Area : 200 sqm
       </p>
         <div className="public"><input type="checkbox"/> Public Access</div><br/>
       <div className="edit btn"> Edit </div>
       <div className="delete btn" >Delete</div>
    </div>
    <div className="div9"> <p>Sample Level 4<br/><br/>
      Level No : 4    
       <br/>
       Annotated Area : 100 sqm
     </p>
       <div className="public"><input type="checkbox"/> Public Access</div><br/>
     <div className="edit btn" > Edit </div>
     <div className="delete btn" >Delete</div>
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
export default BuildingDash