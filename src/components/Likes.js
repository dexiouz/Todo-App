import React, { Component } from 'react';
import Header from './Header';
class Likes extends Component {
  state = {
    likes: 0
  }

  //increaseLikes handler
  increaseLikes = () => {
    this.setState((prevState) => {
      return {
        likes: prevState.likes + 1
      }
    })
  }
  // decreaseLikes handler
decreaseLikes = () => {
  this.setState((prevState) => {
    return {
      likes: prevState.likes - 1
    }
  })
}
// resetLikes handler
resetLikes = () => {
  this.setState(() => {
    return {
      likes: 0
    }
  })
}
  render(){
    return (
      <div>
        <Header title = "THIS IS THE LIKES APP HEADER"/>
        <h1> Likes: { this.state.likes } </h1>
        <button onClick = { this.increaseLikes }>like</button>
        <button onClick = { this.decreaseLikes }>unlike</button>
        <button onClick = { this.resetLikes }>reset</button>
      </div>
    )
  }
}
export default Likes;