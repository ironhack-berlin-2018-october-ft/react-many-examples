import React, { Component } from 'react'
import SocialCard from './SocialCard'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [{
        name: 'Cat',
        img1: '/images/cat1.jpg',
        img2: '/images/cat2.jpg',
        nbOfLikes: 0
      }, {
        name: 'Dog',
        img1: '/images/dog1.jpg',
        img2: '/images/dog2.jpg',
        nbOfLikes: 0
      }]
    }
  }
  getTotalNbOfLikes() {
    return this.state.characters.reduce((acc, c) => acc + c.nbOfLikes, 0)
  }
  addLike(indexToAddLike) {
    this.setState({
      characters: this.state.characters.map((c,i) => {
        console.log(i, indexToAddLike);
        
        let nbOfLikes = c.nbOfLikes+(i === indexToAddLike ? 1 : 0)
        console.log({
          name: c.name,
          img1: c.img1,
          img2: c.img2,
          nbOfLikes
        })
        return {
          name: c.name,
          img1: c.img1,
          img2: c.img2,
          nbOfLikes
        }
      })
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Exercise</h1>
        <p>Total likes: {this.getTotalNbOfLikes()}</p>
        <div style={{ display: "flex", flexWrap: 'wrap' }}>
          {this.state.characters.map((c, i) =>
            <SocialCard
              name={c.name}
              img1={c.img1}
              img2={c.img2}
              nbOfLikes={c.nbOfLikes}
              onLike={() => this.addLike(i)}
            />
          )}
        </div>
      </div>
    )
  }
}
