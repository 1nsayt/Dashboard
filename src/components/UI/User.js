import React, {Component} from 'react'
import FontAws from './FontAws'

export default class User extends Component {
    render(){
        const {src,alt,fontName,fullName,jobTitle} = this.props; 
        return(
            <div>
                <img src={src} alt={alt}>
                    <FontAws fontName = {fontName}/>
                </img>
                <span className="">{fullName}</span>
                <span className="">{jobTitle}</span>
            </div>
        )
    }
}