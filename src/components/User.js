import React, { Component } from 'react';

import './../styling/User.css';

class User extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: ''
    };

    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged( user => {
      console.log();
      this.props.setUser(user);
    });
  }

  signIn() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider );
  }

  signOut() {
    this.props.firebase.auth().signOut();
  }

  render() {
    return(
      <div className="title-bar">
        { this.props.user ? <div>{this.props.user.displayName} | <button className="btn-btn-warning" onClick={this.signOut}>Sign Out</button></div> : <div>Guest | <button className="btn-btn-warning"onClick={this.signIn}>Sign In</button></div> }
      </div>
    );
  }
}

export default User;