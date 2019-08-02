import React, {Component} from 'react'
import FontAws from './FontAws';


export default class User extends Component {
    render(){
        const {user,className,fontName} = this.props; 
        return(
            <div className={className.user}>
                <div className={className.userPic}>
                    <img src={user.src} alt={user.alt}/>
                    <FontAws fontName={fontName} />
                </div>
                <div className={className.userName}>
                    <span>{user.fullName}</span>
                    <span>{user.jobTitle}</span>
                </div>
            </div>
        )
    }
}