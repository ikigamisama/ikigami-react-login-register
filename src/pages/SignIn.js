import React, { Component } from 'react';



export default class SignIn extends Component {
  constructor() {
      super();

      this.state = {
          username: '',
          password: ''
      };
  }
  loginSubmit = (evt) => {
      evt.preventDefault();
      console.log('The form was submitted with the following data:');
      console.log(this.state);
  }
  onChangeLogin = (evt) => {
    let target = evt.target,
        value = target.value,
        name = target.name;


    this.setState({
      [name]: value
    });

  }
  render(){
    return(
      <div className="form-content">
        <form onSubmit={this.loginSubmit.bind(this)}>
            <div className="form-field">
                <label htmlFor="user">USERNAME</label>
                <input type="text" id="user" className="form-field-input" name="username" onChange={this.onChangeLogin.bind(this)}/>
            </div>
            <div className="form-field">
                <label htmlFor="pass">PASSWORD</label>
                <input type="password" id="pass" className="form-field-input" name="password" onChange={this.onChangeLogin.bind(this)}/>
            </div>
            <div className="form-field">
                <a href="" className="form-field-button social-media facebook"><i className="fa fa-facebook"></i>  Sign In With Facebook</a>
            </div>
            <div className="form-field">
                <a href="" className="form-field-button social-media google-plus"><i className="fa fa-google-plus"></i>  Sign In With Google</a>
            </div>
            <div className="form-field">
                <button className="form-field-button">Sign In</button>
            </div>
        </form>
      </div>
    );
  }
}
