import React, { Component } from 'react'
import PostsItem from './PostItem'
import Loading from './Loading'
import Pagination from './Pagination'

const a = ({
  id: key,
  title: header,
  person_name: author,
  textPreview: body
}) => <PostsItem key={key} header={header} body={body} author={author} />

class PostsList extends Component {
  state = { data: null, loading: true }

  loadData = async pageNumber => {
    const URL = `http://localhost:4000/posts?_page=${pageNumber}&_limit=2`
    const res = await fetch(URL)
    const data = await res.json()
    this.setState({ data, loading: false })
  }

  componentDidMount() {
    this.loadData(this.props.match.params.pageNumber)
  }

  componentWillReceiveProps(nextProps) {
    this.loadData(nextProps.match.params.pageNumber)
  }
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
