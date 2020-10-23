import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Dashboard extends React.Component{
    render(){
        return(
                <div className="content-Grid">
    <header> </header>
    <div className="headTitle">INCLUNAV</div> 
    <div className="help btn" onclick="funHelp()"> Help</div>
    <div className="profile btn" onclick="funProfile()">Profile</div>
    <div className="addVenue btn"><Link to="/AddVenue">Add new Venue</Link></div>
    <div className="DP">First name Last name</div>
    <div className="nav"></div>
    <div className="dash1">
     <p className="btn"><Link to="/VenueDash">Sample Venue 1</Link><br/><br/>
     Buildings : 05
       <br/>
       Annotated Area : 200 sqm
       
     </p>
     <p></p>
     <div className="edit btn"><Link to="/AddVenue">Edit </Link></div>
     <div className="delete btn" ><Link to="/DeleteVenue">Delete</Link></div>
    </div>
    <div className="dash2">
      <p className="btn">Sample Venue 2<br/><br/>
        Buildings : 02
          <br/>
          Annotated Area : 100 sqm
        </p>
        <p></p>
        <div className="edit btn"> Edit </div>
        <div className="delete btn">Delete</div>
    </div>
    <div className="dash3">
      <p className="btn">Sample Venue 3<br/><br/>
        Buildings : 05
          <br/>
          Annotated Area : 400 sqm
        </p>
        <p></p>
        <div className="edit btn"> Edit </div>
        <div className="delete btn">Delete</div>
    </div>
    <div className="dash4"><p className="btn">Sample Venue 4<br/><br/>
      Buildings : 10
        <br/>
        Annotated Area : 2000 sqm
      </p>
      <p></p>
      <div className="edit btn"> Edit </div>
      <div className="delete btn">Delete</div></div>
    <div className="dash5"><p className="btn">Sample Venue 5<br/><br/>
      Buildings : 01
        <br/>
        Annotated Area : 50 sqm
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
        )
    }
}
export default Dashboard