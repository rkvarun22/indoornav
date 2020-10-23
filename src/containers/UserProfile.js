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
            

            <label>&nbsp;&nbsp;&nbsp;&nbsp;First Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="fName" /></label>
            <label>&nbsp;&nbsp;Last Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="lName" /></label><br/><br/>
            <label>&nbsp;&nbsp;&nbsp;&nbsp;Organisation:&nbsp;&nbsp;<input type="text" name="organisation"/></label>
            <label>&nbsp;&nbsp;Email Id:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="email" email="emailID" /></label><br/><br/>
            <label>&nbsp;&nbsp;&nbsp;&nbsp;Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="password" pswd="pass" /></label>
            <label>&nbsp;&nbsp;Confirm Password:&nbsp;&nbsp;<input type="password" pswd="pass2" /></label><br/>

            <p>&nbsp;&nbsp;&nbsp;&nbsp;Section with a * are mandatory.<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;Password must be atleast 8 characters long and <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;contain atleast 1 capital letter, and 1 number.</p>


            <label>&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" /></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="Cancel"/></label><br/>
          </form>
        </div>
      </div>
      </div>
    );
  }
}
export default UserProfile
