import React, {Component} from 'react';
import './App.css';
import Helo from './components/Helo';
import welcome from './components/welcome';

class App extends Component {
render(){
  return (
    <div className="App">
      <Helo />
      <welcome />
    </div>
  );
}
}

export default App;
