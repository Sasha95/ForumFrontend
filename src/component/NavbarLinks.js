import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const links = [
  { name: 'Home', link: '/', key: 0 },
  { name: 'Features', link: '/posts', key: 1 },
  { name: 'Press', link: '/press', key: 2 },
  { name: 'Hires', link: '/hires', key: 3 },
  { name: 'About', link: '/about', key: 4 }
]

const toLink = pathName => props => (
  <Link
    className={`nav-link ${pathName === props.link ? 'active' : ''}`}
    to={props.link}
    key={props.key}
  >
    {props.name}
  </Link>
)

const NavbarLinks = props => (
  <nav className="nav blog-nav">
    {links.map(toLink(props.location.pathname))}
  </nav>
)

export default withRouter(NavbarLinks)
