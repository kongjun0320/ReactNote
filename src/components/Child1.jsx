import React, { Component } from 'react'

export default class Child1 extends Component {
  render() {
    return (
      <div>
        人民币：{this.props.money}
      </div>
    )
  }
}
