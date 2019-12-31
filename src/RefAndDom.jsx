import React, { Component } from 'react'

export default class RefAndDom extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.username = React.createRef()
    this.password = React.createRef()
    this.state = {}
  }
  componentDidMount() {
    this.myRef.current.style.color = 'cyan'
    console.log(this.myRef.current);
  }
  submitHandle = () => {
    // 使用非受控组件或者表单数据
    console.log(this.username.current.value);
    console.log(this.password.current.value);
  }
  render() {
    return (
      <div>
        <h3 ref={this.myRef}>ref</h3>
        <input type="text" ref={this.username} />
        <input type="password" ref={this.password} />
        <button onClick={this.submitHandle}>提交</button>
      </div>
    )
  }
}
