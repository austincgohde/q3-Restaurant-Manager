import React, { Component } from 'react'
import { connect } from 'react-redux';

import Dish from './Dish';

class DishList extends Component {
  render () {

    let mapDishes = this.props.dishes.map(d => <Dish key={d.id} dish={d}/>)

    return (
      <div id='lists'>
        {mapDishes}
      </div>
    )
  }
}

function mapStateToProps(store, props) {
  return {
    dishes: store.dishes.filter(d => d.course_id == props.match.params.id)
  }
}

export default connect(mapStateToProps, null)(DishList)
