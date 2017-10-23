import React from 'react'
import PostsList from './PostsList'
import Header from './Header'
import { Route } from 'react-router-dom'

const PostsPage = props => (
  <div>
    <Header title={'Cписок Постов'} body={'Описание Списка'} />
    <Route exact path={props.match.url} component={PostsList} />
    <Route path={`${props.match.url}/:pageNumber`} component={PostsList} />
  </div>
)
export default PostsPage
