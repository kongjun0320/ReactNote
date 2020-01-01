import React, { Component, Fragment } from 'react'

import './mock'
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userList: []
    }
  }
  componentDidMount() {
    axios.get('/api/users').then(res => {
      let userList = res.data.list
      this.setState({
        userList
      })
    })
    axios
      .post('/api/add', {
        username: 'kobe',
        password: 11223344
      })
      .then(res => {
        console.log(res)
      })
  }
  render() {
    const { userList } = this.state
    return (
      <Fragment>
        <div>Hello world</div>
        <ul>
          {userList.map((item, index) => (
            <li key={index}>
              {item.name}=={item.age}
            </li>
          ))}
        </ul>
      </Fragment>
    )
  }
}
