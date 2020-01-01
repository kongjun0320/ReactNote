import React from 'react'

export default class StateComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'this is msg',
      count: 1
    }
  }
  addHandle() {
    let count = this.state.count
    this.setState({
      count: ++count
    })
  }
  subHandle = () => {
    let count = this.state.count
    this.setState({
      count: --count
    })
  }
  render() {
    return (
      <div>
        <span onClick={() => { this.addHandle() }}>add</span>
        {this.state.count}
        <span onClick={this.subHandle}>sub</span>
      </div>
    )
  }
}