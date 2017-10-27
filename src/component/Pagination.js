import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const range = (n, m) => {
  const element = [n - m]
  for (var index = n; index < m; index++) {
    element[index - n] = index
  }
  return element
}

const createArray = ({ current = 1, count, numberItem, numberLinks = 8 }) => {
  const l = ((count / numberItem) | 0) + 1
  if (l > numberLinks + 2) {
    const n = numberLinks - 2
    const f = current - ((n / 2) | 0) + 1
    const first = f > 1 ? f : 2
    if (f + n > l) return [1, ...range(l - n, l + 1)]
    else return [1, ...range(first, first + n), l]
  } else {
    return range(1, l + 1)
  }
}

const pafinationItem = (path, current = 1) => el => (
  <Link
    key={el}
    className={`btn btn-${current === el ? '' : 'outline-'}primary`}
    to={path + '/' + el}
  >
    {el}
  </Link>
)

class Pagination extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !!nextProps.count
  }
  render() {
    const { path, ...rest } = this.props
    return (
      <nav className="blog-pagination">
        {createArray(rest).map(pafinationItem(path, rest.current))}
      </nav>
    )
  }
}

export default Pagination
