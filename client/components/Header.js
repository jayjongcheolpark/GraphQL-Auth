import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { Link } from 'react-router'

import query from '../queries/CurrentUser'
import mutation from '../mutations/Logout'

class Header extends Component {
  constructor(props) {
    super(props)

    this.onLogoutClick = this.onLogoutClick.bind(this)
  }

  onLogoutClick() {
    this.props.mutate({

    })
  }

  renderButtons() {
    const { loading, user } = this.props.data
    if (loading) {
      return <div />
    }

    if (user) {
      return (
        <li><a onClick={this.onLogoutClick}>Logout</a></li>
      )
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      )
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    )
  }
}

export default compose(
  graphql(query),
  graphql(mutation)
)(Header)

