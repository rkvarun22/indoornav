import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class DeleteVenue extends React.Component{
    render(){
        return(
            <div>
                <div className="content-Grid">
    <header> </header>
    <div className="headTitle">INCLUNAV</div> 
    <div className="help btn" onclick="funHelp()"> Help</div>
<div className="profile btn" onclick="funProfile()">Profile</div>
    <div className="modal"></div>
    <div className="div2">
      WARNING !<br/><br/>
      You are about to delete the Venue : Sample Venue 01<br/>

        This will remove all buildings and levels information under this venue. <br/>
        This is a non-reversible action.<br/><br/>
        
        If you do not want to delete this venue, <br/>
        click CANCEL.
        <br/>
        <div className="cancel btn" ><Link to="/Dashboard"> Cancel </Link></div>
        If you still want to delete this Venue, <br/>
          enter your password and click DELETE<br/>
          <div className="pass btn">*****</div>
          <div className="pass btn"><Link to="/Dashboard">Delete</Link></div>
        
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
export default DeleteVenue