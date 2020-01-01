import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Mine extends Component {
  render() {
    return (
      <div>
        Mine
        {this.props.children}
      </div>
    )
  }
}

export default withRouter(Mine)
