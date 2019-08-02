import React, { Component } from 'react'
import './App.scss'
import Header from './components/header/Header'
import Profile from './components/profile/Profile'



export default class App extends Component {
  render(){
    return (
        <div>
            <Header /> 
            <Profile />
        </div>
    )}
}
  

