import React, { Component } from 'react';
import Header from './components/js/Header'


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nameApp: 'Todo app'
    }
  }
  render(){
    const { nameApp } = this.state;
    return (
        <div>
          <Header nameApp = {nameApp}/>
        </div>
    )}
}


