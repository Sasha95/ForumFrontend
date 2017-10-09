import React, { Component } from 'react'

const PostsItem = props => (
  <div className="card">
    <div className="card-block">
      <h4 className="card-title">{props.header}</h4>
      <p className="card-text">{props.author}</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">{props.body}</li>
    </ul>
    <div className="card-block">
      <a href="#" className="card-link">
        Card link
      </a>
      <a href="#" className="card-link">
        Another link
      </a>
    </div>
  </div>
)

export default PostsItem
