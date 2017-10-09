import React, { Component } from 'react'

class Navbar extends Component {
  state = {
    isCollapsed: true
  }

  toggleExpand = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    })
  }

  render() {
    return (
      <div className="blog-masthead">
        <div className="container">
          <nav className="nav blog-nav">
            <a className="nav-link active" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              New features
            </a>
            <a className="nav-link" href="#">
              Press
            </a>
            <a className="nav-link" href="#">
              New hires
            </a>
            <a className="nav-link" href="#">
              About
            </a>
          </nav>
        </div>
      </div>
    )
  }
}

export default Navbar
