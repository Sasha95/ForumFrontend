import React from 'react'
import { Link } from 'react-router-dom'

const PostsItem = props => (
  <div className="card">
    <div className="card-block">
      <h4 className="card-title">{props.title}</h4>
      <p className="card-text">{props.person.name}</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">{props.body}</li>
    </ul>
    <div className="card-block">
      <Link to="#" className="card-link">
        {' '}
        Card link
      </Link>
      <Link to="#" className="card-link">
        {' '}
        Another link
      </Link>
    </div>
  </div>
)

export default PostsItem
