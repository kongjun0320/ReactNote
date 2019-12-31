import React, { Component } from 'react'

export default class Child2 extends Component {
  render() {
    return (
      <div>
        美元：{this.props.money * 7}
      </div>
    )
  }
}
