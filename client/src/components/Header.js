import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="row">
            <div className="col s12">
              <a href="#" className="brand-logo">
                Feedback Collector
              </a>
              <ul className="right">
                <li>
                  <a>Login with Google</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
