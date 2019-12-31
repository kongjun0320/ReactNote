import React from 'react'

import Home from './Home.jsx'
import Navigate from './Navigate'
import StateComponent from './StateComponent'
import ComponentLife from './ComponentLife'
import SetState from './SetState'
import IfComponent from './IfComponent'
import ControlComponent from './ControlComponent'
import RefAndDom from './RefAndDom'
import Parent from './components/Parent'
import Compose from './compose'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'this is title'
    }
  }
  modifyTitleHandle = (param) => {
    console.log('this is son variable = ' + param);
    this.setState({
      title: 'this is new title'
    })
  }
  render() {
    return (
      <div>
        <Compose>
          <h3>heh</h3>
          <h3>xix</h3>
          <h3>wuw</h3>
        </Compose>
        <hr />
        <Parent />
        <hr />
        <RefAndDom />
        <hr />
        <ControlComponent />
        <hr />
        <Navigate name="heh" />
        <Home />
        <StateComponent />
        <ComponentLife title={this.state.title} modifyTitleHandle={this.modifyTitleHandle} />
        <button onClick={this.modifyTitleHandle}>modify title</button>
        <hr />
        <SetState />
        <hr />
        <IfComponent />
      </div>
    )
  }
}

export default App