import React, { Component } from 'react'

class Dish extends Component {
  render () {
    return (
      <div>
        <h5>{this.props.dish.name}</h5>
        <p>{this.props.dish.description}</p>
        <p>${this.props.dish.price}</p>
      </div>
    )
  }
}

export default Dish
