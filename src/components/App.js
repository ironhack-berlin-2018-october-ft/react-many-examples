import React, { Component } from 'react';
import Example1 from './example1-events-and-state/Example1'
import Example2 from './example2-list-and-keys/Example2'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Example1 /> */}
        <Example2 />
      </div>
    );
  }
}

export default App;
