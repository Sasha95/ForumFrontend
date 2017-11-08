import React, { Component } from 'react'
import PostsItem from './PostItem'
import Loading from './Loading'
import Pagination from './Pagination'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const a = ({ id: key, title: header, person: author, textPreview: body }) => (
  <PostsItem key={key} header={header} body={body} author={author} />
)

const POSTS_QUERY = gql`
  query {
    todos {
      text
    }
  }
`

class PostsList extends Component {
  state = { data: null, loading: true }

  render() {
    console.log('PostsList', this.props.match.params.pageNumber)
    const match = this.props.match
    return (
      <div className="container">
        <Pagination
          path="/posts"
          current={
            match.params.pageNumber
              ? Number(match.params.pageNumber)
              : undefined
          }
          numberLinks={7}
          numberItem={5}
          count={153}
        />
        <ul className="list-group">
          {this.state.loading ? <Loading /> : this.state.data.map(a)}
        </ul>
      </div>
    )
  }
}

export default PostsList
