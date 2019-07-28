import React, { Component } from 'react'

export default class Header extends Component {
    render(){
        const { nameApp } = this.props;
        return(
            <div className="header_bg">
                <div className="container">
                    <div className="header">
                        <div className="header-title">
                            <i className="far fa-circle fa-lg"></i>
                            <span className="header__name">{nameApp}</span>
                        </div>
                        <div className="header-search">
                            <input className="header-search__input" placeholder="Quick find..."/>
                        </div>
                        <ul className="header-actions">
                            <li className="header-actions__link"><a href="#"><i className="header-actions__badget_them fas fa-plus-circle fa-lg"></i></a></li>
                            <li className="header-actions__link"><a href="#"><i className="header-actions__badget_them fas fa-bell"></i></a></li>
                            <li className="header-actions__link"><a href="#"><i className="header-actions__badget_them fas fa-cog"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}