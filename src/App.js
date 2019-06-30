import React, { Component } from 'react';
import './App.css';
import Pokegame from './Pokegame';
import { directive } from '@babel/types';

class App extends Component {
  render (){
      return (
      
      <div className="App">
        <Pokegame />
      </div>
      );
  }
}

export default App;
