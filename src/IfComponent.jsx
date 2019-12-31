import React, { Component } from 'react'

export default class IfComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFlag: false,
      list: ['eat', 'play', 'coding']
    }
  }
  render() {
    let { isFlag, list } = this.state
    return (
      <div>
        <h1>条件渲染</h1>
        <button onClick={() => { this.setState({ isFlag: true }) }}>toggle</button>
        {isFlag ? <div>登录</div> : <div>注册</div>}
        {
          list.length > 0 ? (
            <ul>
              {
                list.map((item, index) => (<li key={index}>{item}</li>))
              }
            </ul>
          ) : (
              <h4>数据请求中...</h4>
            )
        }
      </div>
    )
  }
}
