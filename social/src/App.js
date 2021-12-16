import React, { Component } from 'react'
import {Routes, Route} from 'react-router-dom'
import Register from './views/Register';
import Login from './views/Login';
import Logout from './views/Logout';
import Home from './views/Home';
import Post from './views/Post';
import ProtectedRoute from './components/ProtectedRoute';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


export default class App extends Component {
  constructor(){
    super();
    this.state={
      token:'',
      post:[]
    }
  }

  setToken = (token)=>{
    this.setState({token})
    localStorage.setItem('token',token)
  }

  static getDerivedStateFromProps = (props,state)=>{
    return {"token":localStorage.getItem('token'),  "collection":JSON.parse(localStorage.getItem('collection')||"[]") }
  }

  render() {
    return (
      <div>
        <NavBar token={this.state.token}/>
        <Routes>

          <Route exact path = '/' element={
            <ProtectedRoute token={this.state.token}>
              <Home/>
            </ProtectedRoute>
          }/>
          <Route exact path = '/post' element={
            <ProtectedRoute token={this.state.token}>
              <Post/>
            </ProtectedRoute>
          }/>
          <Route exact path = '/logout' element={
            <ProtectedRoute token={this.state.token}>
              <Logout setToken={this.setToken}/>
            </ProtectedRoute>
          }/>
          
          <Route path = '/login' element={<Login setToken={this.setToken}/>}/>
          <Route path = '/register' element={<Register/>}/>

        </Routes>
      </div>
    )
  }
}