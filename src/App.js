import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Api from './Api'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      genres: [],
      isLoading: false
    }
  }
  componentDidMount() {
    this.setState({
      isLoading: true
    })
    Api.loadGenres()
      .then((res) => {
        this.setState({
          isLoading: false,
          genres: res.data
        })
      })
  }

  renderGenreLink(genre) {
    return (
      <span>&nbsp;<a href=''>{genre}</a>&nbsp;</span>
    )
  }
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
              <div className="navbar-header page-scroll">
                <a className="navbar-brand page-scroll" href="#page-top">
                    <img src="images/logo.png" height="30" />
                </a>
              </div>
        
              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav">
                  <li>
                    <a href="">Menu item</a>
                  </li>
                </ul>
              </div>
        
            </div>
          </nav>
        </div>
      </Router>
    )
  }
}

export default App
