import React from 'react'

const Colors = (props) => {

    return (
        <div className='colors-container'>
            <input type='color' id='color' name='color' value={props.colorState} onChange={props.handleColorSelect}/>
        </div>
    )
}

export default Colors