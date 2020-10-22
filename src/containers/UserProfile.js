import React, { Component } from "react";
import {Link} from 'react-router-dom';

class UserProfile extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
        <div>
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <form>
            <h3 style={{textAlign: "center"}}>USER PROFILE</h3><br/>
            

            <label>First Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="fName" /></label>
            <label>&nbsp;&nbsp;Last Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="lName" /></label><br/><br/>
            <label>Organisation:&nbsp;&nbsp;<input type="text" name="organisation"/></label>
            <label>&nbsp;&nbsp;Email Id:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="email" email="emailID" /></label><br/><br/>
            <label>Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="password" pswd="pass" /></label>
            <label>&nbsp;&nbsp;Confirm Password:&nbsp;&nbsp;<input type="password" pswd="pass2" /></label><br/>

            <p>Section with a * are mandatory.<br/>
            Password must be atleast 8 characters long and <br/>
            contain atleast 1 capital letter, and 1 number.</p>


            <label><input type="submit" /></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label><input type="button" value="Cancel"/></label>
          </form>
        </div>
      </div>
      </div>
    );
  }
}
export default UserProfile
