import React from 'react'

export default function Box(props) {
    const {
        box
    } = props

    return (
        <div 
            key={box.id} 
            style={
                {backgroundColor: box.color, 
                height: box.size + "px", 
                width: box.size + "px", 
                margin:"5px"}}>
        </div>
    )
}
