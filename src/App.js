import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './component/Navbar'
import './blog.css'
import PostsPage from './component/PostsPage'
import HomePage from './component/HomePage'

const App = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/posts" component={PostsPage} />
    </Switch>
  </div>
)
export default App
