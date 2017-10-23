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

  async componentDidMount() {
    const URL = `http://localhost:4000/posts?_page=1&_limit=2`
    const res = await fetch(URL)
    const data = await res.json()
    this.setState({ data, loading: false })
  }

  render() {
    console.log(this.props)
    return (
      <div className="container">
        <Pagination current={9} numberLinks={5} numberItem={5} count={153} />
        <ul className="list-group">
          {this.state.loading ? <Loading /> : this.state.data.map(a)}
        </ul>
      </div>
    )
  }
}

export default PostsList
