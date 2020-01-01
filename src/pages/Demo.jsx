import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }
  inputChangeHandle = e => {
    this.setState({
      name: e.target.value
    })
  }
  render() {
    console.log(this.props)
    return (
      <Fragment>
        <button
          onClick={() => {
            this.props.history.push('/')
          }}
        >
          go home
        </button>
        <input
          type="text"
          value={this.state.name}
          onChange={this.inputChangeHandle.bind(this)}
        />
        {/* <Prompt when={!!this.state.name} message={'确定要离开吗？'} /> */}
        <div>demo==>{this.props.name}</div>
      </Fragment>
    )
  }
}

export default withRouter(Demo)
