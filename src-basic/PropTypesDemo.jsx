import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class PropTypesDemo extends Component {
  render() {
    return (
      <div>
        PropsTypes:{this.props.name}{this.props.age}
      </div>
    )
  }
}

PropTypesDemo.propTypes = {
  name: propTypes.string
}
PropTypesDemo.defaultProps = {
  age: 21
}
