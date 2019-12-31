import React, { Component } from 'react'

export default class SetState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'this is msg',
      name: 'zms'
    }
  }
  async modifyMsgHandle() {
    // setState is async
    // this.setState({
    //   msg: 'new msg'
    // }, () => {
    //   console.log(this.state.msg);
    // })
    // console.log(this.state.msg);

    await this.setStateAsync({ msg: 'new msg', name: 'rose' })
    console.log(this.state);
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    })
  }
  render() {
    let { msg } = this.state
    return (
      <div>
        <h1>{msg}</h1>
        <button onClick={this.modifyMsgHandle.bind(this)}>modify msg</button>
      </div>
    )
  }
}
