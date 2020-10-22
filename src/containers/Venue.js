import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SignUp from './SignUp';
import UserProfile from './UserProfile';
import VenueDash from './VenueDash';

class Venue extends React.Component{
    state = {
        seen: false
      };
    
      togglePop = () => {
        this.setState({
          seen: !this.state.seen
        });
      };
    render(){
        return(
            <div>
                <div className="content-Grid">
                <header> </header>
                    <div className="headTitle">DASHBOARD</div> 
                    <div className="help btn" onclick="funHelp()"> Help</div>
                    <div className="profile btn" onClick={this.togglePop}>First Name</div>
                    {this.state.seen ? <UserProfile toggle={this.togglePop} /> : null}
                    <div className="addVenue btn" onclick="window.open('AddLevel.html')"> Add new<br/>&nbsp;&nbsp;Venue</div>
                </div>
            </div>
        )
    }
    
}
export default Venue