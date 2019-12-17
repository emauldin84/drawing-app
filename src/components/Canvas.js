import React, { useState } from 'react'

const Canvas = (props) => {
    const [artState, setArtState] = useState([])

    let art = artState.map((stroke, i) => {
        return <div key={i} style={{position: 'absolute', borderRadius: '50%', backgroundColor: stroke.color, width: stroke.size, height: stroke.size, left: stroke.xCoord, top: stroke.yCoord}}></div>
    })

    const handleMouseMove = (e) => {
        if(e.nativeEvent.buttons === 1){
            setArtState([
                ...artState,
                {
                    color: props.colorState,
                    size: props.sizeState,
                    yCoord: e.pageY,
                    xCoord: e.pageX,
                }
            ])
        }
    }
    const handleClick = (e) => {
            setArtState([
                ...artState,
                {
                    color: props.colorState,
                    size: props.sizeState,
                    yCoord: e.pageY,
                    xCoord: e.pageX,
                }
            ])
    }
    
    return(
        <div className="canvas-container" onMouseMove={handleMouseMove} onClick={handleClick}>
            {art}
        </div>
    )
}

export default Canvas