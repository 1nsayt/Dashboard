import React from 'react'

const Background = (props) =>{
    return(
        <div className={props.className}>
          {props.children}
        </div>
    )
}

export default Background;