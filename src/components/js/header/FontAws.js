import React, { Component } from 'react'


export default class FontAws extends Component {
    render(){
        const {fontName} = this.props;
        return(
                <i className={fontName}>
                </i>
        )
    }
}