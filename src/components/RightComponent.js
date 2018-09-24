import React, { Component } from 'react';
import SignIn from '../pages/SignIn';
import SignRegister from '../pages/SignRegister';
import { Route, NavLink } from 'react-router-dom';

export default class RightComponent extends Component {

    render(){
      const { classDeclared } = this.props;
      return(
          <div className={classDeclared}>
              <div className="form-link-title">
                  <NavLink exact to="/" activeClassName="form-title-link active" className="form-title-link">Sign In</NavLink>
                  or
                  <NavLink to="/register" activeClassName="form-title-link active" className="form-title-link">Sign Up</NavLink>
              </div>
             <Route exact path="/" component={SignIn}></Route>
             <Route path="/register" component={SignRegister}></Route>
          </div>
      );
    }
}
