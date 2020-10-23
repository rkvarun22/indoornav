import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './containers/Home';
import SignUp from './containers/SignUp';
import Dashboard from './containers/Dashboard';
import AddVenue from './containers/AddVenue';
import DeleteVenue from './containers/DeleteVenue';
import VenueDash from './containers/VenueDash';
import AddBuilding from './containers/AddBuilding';
import AddLevel from './containers/AddLevel';
import DeleteLevel from './containers/DeleteLevel';
import DeleteBuilding from './containers/DeleteBuilding';
import BuildingDash from './containers/BuildingDash';
import Annotate from './containers/Annotate';
import EditMap from './containers/EditMap';
import Venue from './containers/Venue';
import UserProfile from './containers/UserProfile';
import SignUpForm from './containers/SignUpForm';
import LogInForm from './containers/LogInForm';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route>

            <Route exact path='/' component={Home} />
            <Route exact path='/Dashboard' component={Dashboard} />
            <Route  exact path='/SignUp' component={SignUp} />
            <Route  exact path='/AddVenue' component={AddVenue} />
            <Route  exact path='/DeleteVenue' component={DeleteVenue} />
            <Route  exact path='/Venuedash' component={VenueDash} />
            <Route  exact path='/AddBuilding' component={AddBuilding} />
            <Route  exact path='/AddLevel' component={AddLevel} />
            <Route  exact path='/DeleteLevel' component={DeleteLevel} />
            <Route  exact path='/DeleteBuilding' component={DeleteBuilding} />
            <Route  exact path='/BuildingDash' component={BuildingDash} />
            <Route  exact path='/Annotate' component={Annotate} />
            <Route  exact path='/EditMap' component={EditMap} />
            <Route  exact path='/Venue' component={Venue} />
            <Route  exact path='/UserProfile' component={UserProfile} />
            <Route  exact path='/SignUpForm' component={SignUpForm} />
            <Route  exact path='/LogInForm' component={LogInForm} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
