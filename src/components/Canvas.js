import React, { useState } from 'react'

const Canvas = () => {
    const [artState, setArtState] = useState([])
    const [colorState, setColorState] = useState('black')
    const [sizeState, setSizeState] = useState('4px')

    let art = artState.map((stroke, i) => {
        return <div key={i} style={{position: 'absolute', borderRadius: '50%', backgroundColor: stroke.color, width: stroke.size, height: stroke.size, left: stroke.xCoord, top: stroke.yCoord}}></div>
    })

    const handleChange = (e) => {
        if(e.nativeEvent.buttons === 1){
            setArtState([
                ...artState,
                {
                    color: colorState,
                    size: sizeState,
                    yCoord: e.pageY,
                    xCoord: e.pageX,
                }
            ])
        }
    }
    return(
        <div className="canvas-container" onMouseMove={handleChange}>
            Canvas
            {art}
        </div>
    )
}

export default Canvas