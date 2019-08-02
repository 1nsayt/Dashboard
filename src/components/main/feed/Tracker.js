import React,{Component} from 'react'


export default class Tracker extends Component{
    render(){
        const {className} = this.props;
        return(
            <div className={className.tracker}>
                <div className={className.day}>
                    <span>25</span>
                    <span>JUN</span>
                </div>
                <div className={className.tasks}>
                    <span>Todays Tasks</span>
                    <div className = {className.progressBar}>
                        <span className = {className.bar}>
                            <span className = {className.progress}></span>
                        </span>
                    </div>
                    <div className={className.tasksIs}>
                        <span>Done:12</span>
                        <span>Must Do:16</span>
                    </div>
                </div>
            </div>
        )
    }
}