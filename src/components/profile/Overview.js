import React , {Component} from 'react'
import FontAws from '../UI/FontAws'

export default class Overview extends Component{
   
    render(){
        const {additions,list} = this.props;
        return(
            <ul className={list}>
                {additions.map(addition=>
                <li>
                    <FontAws fontName = {addition.fontNames.comment}
                             color = {addition.color} />
                    <a href="#">
                      <span>{addition.name}</span>
                    </a>
                    <a href="#">
                      <FontAws fontName = {addition.fontNames.plus}/>
                    </a>
                </li>
                )}
            </ul>
        )
    }
}