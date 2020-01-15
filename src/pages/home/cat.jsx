import React, { useState } from 'react'

export default function Cat() {
    let [x, getX] = useState(0)
    let [y, getY] = useState(0) 

    const handleMouseMove = event => {
        getX(x = event.clientX)
        getY(y = event.clientY)
    }

    return (
        <div style={{ height: '100%' }} onMouseMove={handleMouseMove}>
            <p style={{height:300, border: '1px solid red'}}>当前的鼠标位置是 ({x}, {y})</p>
        </div>
    )
}