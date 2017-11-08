import React, { Component } from 'react'
import PostsItem from './PostItem'
import Loading from './Loading'
import Pagination from './Pagination'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const a = ({ id, ...rest }) => <PostsItem key={id} {...rest} />

const POSTS_QUERY = gql`
  query($offset: Int, $first: Int) {
    allPosts(offset: $offset, first: $first) {
      nodes {
        id
        personId
        person: personByPersonId {
          name
        }
        title
        body: preview
      }
    }
  }
`

const parameters = {
  options: ({ match }) => ({
    variables: { offset: match.params.pageNumber * 10, first: 5 }
  })
}

class PostsList extends Component {
  render() {
    console.log('PostsList', this.props)
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
          {this.props.data.loading ? (
            <Loading />
          ) : (
            this.props.data.allPosts.nodes.map(a)
          )}
        </ul>
      </div>
    )
  }
}

const b = graphql(POSTS_QUERY, parameters)

export default b(PostsList)
