export const getData = async cityName => {
  const URL = `http://localhost:4000/posts?_page=1&_limit=2`
  const res = await fetch(URL)
  return res.json()
}
