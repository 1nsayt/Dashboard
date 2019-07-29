import React, { Component } from 'react';
import Action from './Action'

export default class ListActions extends Component{
    render(){
        const actions = this.props.actions;
        return(
            <ul className="header-actions">
                {actions.map(action=>
                    <Action key = {action.id}
                            fontName = {action.fontName} />      
                )} 
            </ul>
        )
    }

}