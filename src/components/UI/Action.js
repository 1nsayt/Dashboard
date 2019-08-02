import React, { Component } from 'react'
import FontAws from './FontAws'

export default class Action extends Component {
    render(){
        const {fontName,item,color,text} = this.props;
        return(
            <li className={item}>
                {text?
                    <>
                        <FontAws  fontName = {fontName}
                                  color    = {color} />  
                        <a href = "#"> 
                            <span>{text}</span> 
                        </a>
                    </>:
                    <>
                        <a href = "#"> 
                        <FontAws  fontName = {fontName}
                                  color    = {color} />  
                        </a> 
                    </>  
                } 
            </li>
        )
    }
}