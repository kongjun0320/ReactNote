import React, { Component } from 'react'

export default class ControlComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }
  submitHandle = (e) => {
    // 阻止表单默认的提交事件
    e.preventDefault()
    console.log(this.state.inputValue);
  }
  inputChangeHandle = (e) => {
    let newInputValue = e.target.value
    this.setState({
      inputValue: newInputValue
    })
  }
  render() {
    let { inputValue } = this.state
    return (
      <div>
        <h3>受控组件</h3>
        <form onSubmit={this.submitHandle}>
          <input type="text" value={inputValue} onChange={this.inputChangeHandle} />
          <input type="submit" value="提交" />
        </form>
      </div>
    )
  }
}
