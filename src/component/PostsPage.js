import React from 'react'
import PostsList from './PostsList'
import Header from './Header'

const PostsPage = () => (
  <div>
    <Header title={'Cписок Постов'} body={'Описание Списка'} />
    <PostsList />
  </div>
)
export default PostsPage
