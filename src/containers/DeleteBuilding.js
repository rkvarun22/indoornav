import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class DeleteBuilding extends React.Component{
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
      You are about to delete the Building : Sample Building 01<br/>

        This will remove all levels information under this building. <br/>
        This is a non-reversible action.<br/><br/>
        
        If you do not want to delete this building, <br/>
        click CANCEL.
        <br/>
        <div className="cancel btn" ><Link to="/VenueDash"> Cancel </Link></div>
        If you still want to delete this building, <br/>
          enter your password and click DELETE<br/>
          <div className="pass btn">*****</div>
          <div className="pass btn" ><Link to="/VenueDash">Delete</Link></div>
        
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
export default DeleteBuilding