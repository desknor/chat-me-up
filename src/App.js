import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';

var firebaseConfig = {
  apiKey: "AIzaSyA-nNjNmFBfzBaPayxYRcol4YIEjLoiVYY",
  authDomain: "chatmeup-cdbc3.firebaseapp.com",
  databaseURL: "https://chatmeup-cdbc3.firebaseio.com",
  projectId: "chatmeup-cdbc3",
  storageBucket: "chatmeup-cdbc3.appspot.com",
  messagingSenderId: "733200693495",
  appId: "1:733200693495:web:42014729cbb86ac191fbf2",
  measurementId: "G-WQLJD7Y873"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeRoom: '',
      user: null,
    };

    this.setActiveRoom = this.setActiveRoom.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  setActiveRoom(room) {

    this.setState({
      activeRoom: room
    });

  }

  setUser(user) {
    this.setState({
      user:user
    });
  }

  formatTime(timestamp) {
    // Converts the seconds given by UNIX timestamp to milliseconds for Date object
    let date = new Date (timestamp);
    let zTime = date.toLocaleTimeString('en-US');
    return zTime;
  }

  render() {
    return (
      <div>
        <User
        firebase={firebase}
        setUser={this.setUser}
        user={this.state.user}
        />
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
            <RoomList
            firebase={firebase}
            activeRoom={this.state.activeRoom}
            setActiveRoom={this.setActiveRoom}
            />
            <MessageList
            firebase={firebase}
            activeRoom={this.state.activeRoom}
            user={this.state.user}
            formatTime={this.formatTime}
            />
        </div>
      </div>
    );
  }
}

export default App;
