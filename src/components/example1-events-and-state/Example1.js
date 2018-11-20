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
            img1="/images/cat1.jpg" 
            img2="/images/cat2.jpg" 
          />
          <SocialCard 
            name="Dog" 
            img1="/images/dog1.jpg" 
            img2="/images/dog2.jpg" 
          />
        </div>
      </div>
    );
  }
}

export default Example1;
