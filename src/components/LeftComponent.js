import React, { Component } from 'react';
import Background from '../assets/img/cover.png';

export default class LeftComponent extends Component {

    render(){
      const { classDeclared } = this.props;
      return(
          <div className={classDeclared}>
              <img src={Background} alt="background" />
              <div className="wrapper">
                <div className="label-content">
                    <h1 className="h1">Welcome to Ikigami</h1>
                    <h2 className="h2">Are you ready to discover about me? </h2>


                </div>
                <div className="links-content-list">
                  <ul>
                    <li>
                        <a href="https://www.facebook.com/ikigamisama" target="_blank" rel="noopener noreferrer">
                          <i className="fa fa-facebook-square"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/iikigami/" target="_blank" rel="noopener noreferrer">
                          <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/ikigamisan" target="_blank" rel="noopener noreferrer">
                          <i className="fa fa-twitter-square"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ikigamisama" target="_blank" rel="noopener noreferrer">
                          <i className="fa fa-github-square"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://plus.google.com/u/0/107866496734690661429" target="_blank" rel="noopener noreferrer">
                          <i className="fa fa-google-plus-square"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/franz-monzales-671775135/" target="_blank" rel="noopener noreferrer">
                          <i className="fa fa-linkedin-square"></i>
                        </a>
                    </li>
                  </ul>
                </div>
              </div>

          </div>
      );
    }
}
