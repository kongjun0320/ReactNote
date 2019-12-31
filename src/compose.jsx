import React, { Component } from 'react'

export default class compose extends Component {
  render() {
    return (
      <div>
        compose:{this.props.children}
      </div>
    )
  }
}
