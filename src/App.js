import React, { Component } from 'react';
import Portal from './Components/Portal/portal';
import NavHeader from './Components/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader />
        <Portal />

        <footer class="w3-container w3-center w3-margin-top footer">
          <p>copyright @ CodeGeeks</p>
        </footer>
      </div>
    );
  }
}

export default App;
