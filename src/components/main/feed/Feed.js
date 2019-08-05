import React, {Component} from 'react'
import Tracker from './Tracker'
import classes from './_feed.module.scss'
import InProgress from './InProgress';


export default class Feed extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return(
            <div className={classes.wrapper}>
                <Tracker className = {classes}/>
                <InProgress className = {classes}/>
            </div>
        )
    }
}