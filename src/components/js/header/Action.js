import React, { Component } from 'react'
import FontAws from './FontAws'

export default class Action extends Component {
    render(){
        const {fontName} = this.props;
        return(
            <li className="header-actions__link">
                <a href = "#"> <FontAws fontName = {fontName}/> </a>
            </li>
        )
    }
}