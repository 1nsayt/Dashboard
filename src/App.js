import React, { Component } from 'react'
import './App.scss'
import Header from './components/header/Header'


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     nameApp: "Todo List",
     header: {
        actionsList: [
          {id:1, fontName: " fas fa-plus-circle" },
          {id:2, fontName: " fas fa-bell"},
          {id:3, fontName: " fas fa-cog"},
        ]
      }
    }
  }
  render(){
    const { nameApp} = this.state;
    const { actionsList } = this.state.header;
    return (
        <div>
          <Header nameApp = {nameApp}
                  actions = {actionsList}
          /> 
        </div>
    )}
}
  

