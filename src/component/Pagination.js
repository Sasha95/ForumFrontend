import React from 'react'
import { Link } from 'react-router-dom'

const range = (n, m) => {
  const element = [n - m]
  for (var index = n; index < m; index++) {
    element[index - n] = index
  }
  return element
}

const getPages = ({ current, numberLinks, numberItem, count }) => {
  const numberOfPages = Math.floor(count / numberItem)
  const shift = (numberLinks / 2) | 0
  if (current > numberOfPages - Math.floor(numberLinks / 2)) {
    if (numberOfPages - numberLinks - 1) {
      return range(1, numberOfPages + 1)
    }
    return [1, ...range(numberOfPages - numberLinks + 2, numberOfPages + 1)]
  }
  if (current < numberLinks / 2 + 1) {
    return [...range(1, numberLinks), numberOfPages]
  }
  return [1, ...range(current - shift + 1, current + shift), numberOfPages]
}
/*Pages({current: 10, numberLinks:5, numberItem:10, count:10})*/

const paginationItem = (current, path) => el => (
  <Link
    key={el}
    className={`btn btn-${current === el ? '' : 'outline-'}primary`}
    to={path + '/' + el}
  >
    {el}
  </Link>
)

const Pagination = props => {
  const pages = getPages(props)
  console.log(pages)
  return (
    <nav className="blog-pagination">
      {pages.map(paginationItem(props.current, '/posts'))}
    </nav>
  )
}

export default Pagination
