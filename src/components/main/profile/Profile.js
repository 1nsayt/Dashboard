import React, {Component} from 'react'
import ListActions from '../../UI/ListActions'
import User from '../../UI/User'
import Overview from './Overview'
import classes from './_profile.module.scss'
import g1 from '../../../img/1.jpg'
import g2 from '../../../img/2.jpg'
import g3 from '../../../img/3.jpg'

// import Background from '../../UI/Background';


export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [
                {id:1, src: g2, alt:"girl",fontName:"fas fa-circle", fullName:"Kelly Smith", jobTitle:"Writer" },
                {id:2, src: g1, alt:"girl",fontName:"fas fa-circle", fullName:"Barbara Shalon", jobTitle:"UX designer"},
                {id:3, src: g3, alt:"girl",fontName:"fas fa-circle", fullName:"Dana Saiphone", jobTitle:"Photograph"} 
            ],
            actionsList: [
                {id:1, fontName: " fas fa-envelope", text: "Inbox" },
                {id:2, fontName: " fas fa-sticky-note", text: "Today" },
                {id:3, fontName: " fas fa-calendar-week", text:"Next 7 days"}
            ],
            additionsList: [
                {
                    name: "projects", 
                    fontNames:{
                        comment:"fas fa-comment",
                        plus: "fas fa-plus"
                    }
                },
                {
                    name: "labels", 
                    fontNames:{
                        comment:"fas fa-comment",
                        plus: "fas fa-plus"
                    }
                },
                {
                    name: "filtres", 
                    fontNames:{
                        comment:"fas fa-comment",
                        plus: "fas fa-plus"
                    }
                },  
            ]
        }
    }
    render(){
        const {users,actionsList,additionsList} = this.state;
        return( 
            <div className = {classes.wrapper}>
                    <User user = {users[0]} 
                            className = {classes} 
                            fontName = "fas fa-circle" />
                    <ListActions actions = {actionsList}
                                    list = {classes.widgets} />
                    <Overview additions = {additionsList}
                                list = {classes.overview} /> 
            </div>
        )
    }

}