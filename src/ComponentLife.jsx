import React, { Component } from 'react'

export default class ComponentLife extends Component {
  constructor(props) {
    console.log('constructor');
    super(props)
    this.state = {
      count: 10
    }
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillReceiveProps() {
    console.log(arguments)
    console.log('componentWillReceiveProps');
  }
  addCountHandle = () => {
    let count = this.state.count
    this.setState({
      count: ++count
    })
  }
  modifyParentState = () => {
    this.props.modifyTitleHandle('heh')
  }
  render() {
    console.log('render');
    return (
      <div>
        <h1>hello world</h1>
        <h3>{this.props.title}</h3>
        <button onClick={this.addCountHandle}>Button</button>
        <button onClick={this.modifyParentState}>modifyParentState</button>
        <h3>{this.state.count}</h3>
      </div>
    )
  }
}
