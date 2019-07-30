import React, { Component } from 'react'
import ListActions from '../UI/ListActions'
import FontAws from '../UI/FontAws'
import clasess from './_header.module.scss'


export default class Header extends Component {
    render(){
        const { nameApp, actions } = this.props;
        return(
            <div className={clasess.bg}>
                <div className="container">
                    <div className={clasess.header}>
                        <div className={clasess.title}>
                            <FontAws fontName = {`${clasess.titleIcon} far fa-circle`}/>
                            <span className="title-nameApp">{nameApp}</span>
                        </div>
                        <div className={clasess.search}>
                            <FontAws fontName = {` ${clasess.searchIcon}  fas  fa-search `} />
                            <input className={clasess.searchInput} placeholder="Quick find..."/>
                        </div>
                        <ListActions actions = {actions}
                                     item = {clasess.actionsItem}
                                     color = {clasess.actionsColor} />
                    </div>
                </div>
            </div>
        )
    }
}



// { <li className="header-actions__link"><a href="#"><i className="header-actions__badget_them fa fa-plus-circle"></i></a></li>
// <li className="header-actions__link"><a href="#"><i className="header-actions__badget_them fa fa-bell"></i></a></li>
// <li className="header-actions__link"><a href="#"><i className="header-actions__badget_them fa fa-cog"></i></a></li> }