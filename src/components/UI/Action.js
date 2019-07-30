import React, { Component } from 'react'
import FontAws from './FontAws'

export default class Action extends Component {
    render(){
        const {fontName,item,color} = this.props;
        return(
            <li className={item}>
                <a href = "#"> <FontAws fontName = {fontName}
                                        color = {color} /> 
                </a>
            </li>
        )
    }
}