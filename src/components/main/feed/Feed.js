import React, {Component} from 'react'
import Tracker from './Tracker'
import classes from './_feed.module.scss'

export default class Feed extends Component {
    render(){
        return(
            <div>
                <Tracker className = {classes}/>
            </div>
        )
    }
}