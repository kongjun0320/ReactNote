import React, { Component } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

export default class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 1
    }
  }
  inputChangeHandle(e) {
    let newInputValue = e.target.value
    this.setState({
      inputValue: newInputValue
    })
  }
  render() {
    return (
      <div>
        <h1>parent</h1>
        <input type="text" value={this.inputValue} onChange={this.inputChangeHandle.bind(this)} />
        <div>
          Child1: <Child1 money={this.state.inputValue} />
        </div>
        <div>
          Child2: <Child2 money={this.state.inputValue} />
        </div>
      </div>
    )
  }
}
