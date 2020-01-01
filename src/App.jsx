import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import './css/style.css'

// import Home from './pages/Home'
import Mine from './pages/Mine'
import Child from './pages/Child'
import Demo from './pages/Demo'
import H1 from './pages/H1'
import H2 from './pages/H2'
import NotFound from './pages/NotFound'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink exact strict to="/h1">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact strict to="/mine">
                  Mine
                </NavLink>
              </li>
              <li>
                <NavLink exact strict to="/demo?name=kobe">
                  Demo
                </NavLink>
              </li>
              <li>
                <NavLink exact strict to="/mine/child/123">
                  Child
                </NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Mine>
              <Switch>
                <Route exact strict path="/mine/h1">
                  <H1 />
                </Route>
                <Route exact strict path="/mine/h2">
                  <H2 />
                </Route>
              </Switch>
            </Mine>
            <Route
              exact
              strict
              path="/demo"
              render={() => <Demo name="heh" />}
            ></Route>
            <Route exact strict path="/mine/child/:id?">
              <Child />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
