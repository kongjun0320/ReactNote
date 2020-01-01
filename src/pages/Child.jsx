import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

 class Child extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
  return <div>Child={ this.props.match.params.id }</div>
  }
}

export default withRouter(Child)
