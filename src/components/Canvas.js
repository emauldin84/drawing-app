import React from 'react'

const Canvas = (props) => {

    let art = props.artState.map((stroke, i) => {
        return <div key={i} style={{position: 'absolute', borderRadius: '50%', backgroundColor: stroke.color, width: stroke.size, height: stroke.size, left: stroke.xCoord, top: stroke.yCoord}}></div>
    })

    const handleMouseMove = (e) => {
        if(e.nativeEvent.buttons === 1){
            props.setArtState([
                ...props.artState,
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
            props.setArtState([
                ...props.artState,
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