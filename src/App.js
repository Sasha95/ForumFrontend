import React, { Component } from 'react'
import logo from './logo.svg'
import Navbar from './component/Navbar'
import './blog.css'
import PostsList from './component/PostsList'

const App = () => (
  <div>
    <Navbar />
    <PostsList />
  </div>
)
export default App
