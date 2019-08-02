import React, { Component } from 'react';
import Action from './Action'

export default class ListActions extends Component{
    render(){
        const {actions,list} = this.props;
        return(
            <ul className = {list? list: ''}>
                {actions.map(action=>
                    <Action key = {action.id}
                            fontName = {action.fontName}
                            text = {action.text}
                            color = {action.color}
                            {...this.props} />      
                )} 
            </ul>
        )
    }

}