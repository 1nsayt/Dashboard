import React, { Component } from "react";
import ListActions from "../UI/ListActions";
import FontAws from "../UI/FontAws";
import Container from "../UI/Container";
import Background from "../UI/Background";
import clasess from "./_header.module.scss";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameApp: "Todo List",
      actionsList: [
        { id: 1, fontName: " fas fa-plus-circle" },
        { id: 2, fontName: " fas fa-bell" },
        { id: 3, fontName: " fas fa-cog" }
      ]
    };
  }
  render() {
    const { nameApp, actionsList } = this.state;
    return (
      <Background className={clasess.bg}>
        <Container>
          <div className={clasess.header}>
            <div className={clasess.title}>
              <FontAws fontName="far fa-circle" color={clasess.titleIcon} />
              <span className="title-nameApp">{nameApp}</span>
            </div>
            <div className={clasess.search}>
              <FontAws fontName={` ${clasess.searchIcon}  fas  fa-search `} />
              <input
                className={clasess.searchInput}
                placeholder="Quick find..."
              />
            </div>
            <ListActions
              actions={actionsList}
              item={clasess.actionsItem}
              color={clasess.actionsColor}
            />
          </div>
        </Container>
      </Background>
    );
  }
}

// { <li className="header-actions__link"><a href="#"><i className="header-actions__badget_them fa fa-plus-circle"></i></a></li>
// <li className="header-actions__link"><a href="#"><i className="header-actions__badget_them fa fa-bell"></i></a></li>
// <li className="header-actions__link"><a href="#"><i className="header-actions__badget_them fa fa-cog"></i></a></li> }
