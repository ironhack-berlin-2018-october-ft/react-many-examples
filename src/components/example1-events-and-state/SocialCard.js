import React, { Component } from 'react';

class SocialCard extends Component {
  constructor(props) {
    super(props)
    // Init the state
    this.state = {
      nbOfLikes: 0,
      isMouseIn: false
    }
  }
  addLike() {
    // Update the state
    this.setState({
      nbOfLikes: this.state.nbOfLikes + 1
    })
  }
  handleMouseEnter() {
    this.setState({
      isMouseIn: true
    })
  }
  handleMouseonMouseLeave() {
    this.setState({
      isMouseIn: false
    })
  }
  render() {
    return (
      <div 
        className="SocialCard" 
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseonMouseLeave()}
        style={ { backgroundColor: this.state.isMouseIn ? "#DDDDFF" : "#EEEEFF" } }
      >
        {/* The src image is either props.img1 or props.img2, depending of state.isMouseIn  */}
        <img src={this.state.isMouseIn ? this.props.img2 :  this.props.img1} alt={this.props.name}/>  

        <h2>{this.props.name}</h2>    
         
        {/* Call the metod addLike on click */}
        <button onClick={() => this.addLike()}>
          {this.state.nbOfLikes} like{this.state.nbOfLikes !== 1 && 's'} 
        </button>
      </div>
    );
  }
}

export default SocialCard;
