import React, { Component } from 'react';
import SocialCard from './SocialCard';

class Example1 extends Component {
  render() {
    return (
      <div className="Example1">
        <h1>Example 1</h1>
        <div style={{display: "flex", flexWrap: 'wrap'}}>
          <SocialCard 
            name="Cat" 
            img="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350" 
          />
          <SocialCard 
            name="Dog" 
            img="https://images.pexels.com/photos/485294/pexels-photo-485294.jpeg?auto=compress&cs=tinysrgb&h=350" 
          />
        </div>
      </div>
    );
  }
}

export default Example1;
