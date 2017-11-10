import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './component/Navbar'
import './blog.css'
import PostsPage from './component/PostsPage'
import HomePage from './component/HomePage'
import Signup from './component/Signup'
import ScrollToTop from './component/ScrollToTop'

const App = () => (
  <ScrollToTop>
    <Navbar />

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/posts" component={PostsPage} />
      <Route path="/signup" component={Signup} />
    </Switch>
  </ScrollToTop>
)
export default App
