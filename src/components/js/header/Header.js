import React, { Component } from 'react'
import ListActions from './ListActions'
import FontAws from './FontAws'

export default class Header extends Component {
    render(){
        const { nameApp, actions } = this.props;
        return(
            <div className="header_bg">
                <div className="container">
                    <div className="header">
                        <div className="header-title">
                            <FontAws fontName = "header-title__badget far fa-circle"/>
                            <span className="header-title__name">{nameApp}</span>
                        </div>
                        <div className="header-search">
                            <FontAws fontName = "header-search__badget fas fa-search"/>
                            <input className="header-search__input" placeholder="Quick find..."/>
                        </div>
                        <ListActions actions = {actions}/>
                    </div>
                </div>
            </div>
        )
    }
}



// { <li className="header-actions__link"><a href="#"><i className="header-actions__badget_them fa fa-plus-circle"></i></a></li>
// <li className="header-actions__link"><a href="#"><i className="header-actions__badget_them fa fa-bell"></i></a></li>
// <li className="header-actions__link"><a href="#"><i className="header-actions__badget_them fa fa-cog"></i></a></li> }