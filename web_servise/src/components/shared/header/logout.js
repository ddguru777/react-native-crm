import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import authProvider from 'lib/auth_provider'
import Avatar from "./avatar.jpg"
import Notification from 'lib/notification'
import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap'
import { Link } from 'lib/nav_link'
import { Logout as LogoutAction } from 'actions'

class Logout extends Component {

  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = { dropdownOpen: false }
  }

  toggle() {
    this.setState({ dropdownOpen: !this.state.dropdownOpen })
  }

  logout = () => {
    this.props.dispatch(LogoutAction())
    this.props.history.push('/dasboard')
    authProvider.removeToken()
    Notification.success("Logout")
  }

  render() {
    return (
      <li className="nav-item">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <button
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            type="button"
            aria-haspopup="true"
            onClick={this.toggle}
            aria-expanded={this.state.dropdownOpen}
          >
            <img src={Avatar} className="img-avatar" alt="admin@bootstrapmaster.com"/>
            <span className="d-md-down-none">User name</span>
          </button>

          <DropdownMenu className="dropdown-menu-right">

            <DropdownItem header className="text-center"><strong>Settings</strong></DropdownItem>

            <Link href="/profile">
              <DropdownItem>
                <i className="fa fa-user" /> Profile
              </DropdownItem>
            </Link>

            <DropdownItem onClick={this.logout}><i className="fa fa-lock"></i> Logout</DropdownItem>

          </DropdownMenu>
        </Dropdown>
      </li>
    )
  }
}

// console.log(withRouter(Logout))
// export default withRouter(Logout)
export default connect()(withRouter(Logout))
