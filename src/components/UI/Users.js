import React, {Component} from 'react'
import User from './User'

export default class Users extends Component {
    render(){
        const {users} = this.props; 
        return(
            <div>
                {users.map(user=>
                  <User src={user.src}   
                        alt={user.alt}   
                        fontName={user.fontName}   
                        fullName={user.fullName}   
                        jobTitle={user.jobTitle} />  
                    )
                }
            </div>
        )
    }
}