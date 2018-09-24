import React, { Component } from 'react';



export default class SignRegister extends Component {
  constructor() {
      super();

      this.state = {
          register_username: '',
          register_email: '',
          register_password: '',
          register_password2: '',
          has_aggreed_terms:false
      };
  }
  registerSubmit = (evt) => {
      evt.preventDefault();
      console.log('The form was submitted with the following data:');
      console.log(this.state);
  }
  onChangeRegister = (evt) => {
    let target = evt.target,
        value = target.type === 'checkbox' ? target.checked : target.value,
        name = target.name;

    this.setState({
        [name]: value
    });
  }
  render(){
    return(
      <div className="form-content">
        <form onSubmit={this.registerSubmit.bind(this)}>
            <div className="form-field">
                <label htmlFor="user">USERNAME</label>
                <input type="text" id="user" className="form-field-input" name="register_username" onChange={this.onChangeRegister.bind(this)}/>
            </div>
            <div className="form-field">
                <label htmlFor="email">EMAIL</label>
                <input type="email" id="email" className="form-field-input" name="register_email" onChange={this.onChangeRegister.bind(this)}/>
            </div>
            <div className="form-field">
                <label htmlFor="pass">PASSWORD</label>
                <input type="password" id="pass" className="form-field-input" name="register_password" onChange={this.onChangeRegister.bind(this)}/>
            </div>
            <div className="form-field">
                <label htmlFor="pass2">CONFIRM PASSWORD</label>
                <input type="password" id="pass2" className="form-field-input" name="register_password2" onChange={this.onChangeRegister.bind(this)}/>
            </div>
            <div className="form-field">
              <p className="form-field-checkbox-content">
                 <input className="form-field-checkbox" type="checkbox" name="has_aggreed_terms" value={this.state.has_aggreed_terms}  onChange={this.onChangeRegister.bind(this)}/> I agree all statements in <a href="" className="form-field-terms">terms of service</a>
              </p>
            </div>
            <div className="form-field">
                <button className="form-field-button">Sign Up</button>
            </div>
        </form>
      </div>
    );
  }
}
