import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

class Home extends Component {
  componentDidMount() {
    // console.log(this.props)
  }
  render() {
    // let queryString = new URLSearchParams(useLocation().search)
    // console.log(queryString)
    // const queryString = new URLSearchParams(this.props.location.search)
    // console.log(queryString.get('name'));
    return (
      <Fragment>
        <div>Home</div>
      { this.props.children }
      </Fragment>
    )
  }
}
export default withRouter(Home)
