import React, {Component} from 'react'
import Container from '../UI/Container'
import Profile from './profile/Profile'
import Feed from './feed/Feed' 
import classes from './_main.module.scss'

export default class Main extends Component {
    render(){
        return(
            <Container>
                <div className={classes.wrapper}>
                    <Profile />
                    <Feed />
                </div>
            </Container> 
        )
    }
}