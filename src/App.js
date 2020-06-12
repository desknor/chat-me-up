import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

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
  
    render() {
      return (
        <div className="App">
          <header>
            <h1>Chat-Me-Up</h1>
          </header>
          <main>
            <section id="sidebar">
              <RoomList 
                firebase={firebase}
              />
            </section>
          </main>
        </div>
      )
    }
}
export default App;
