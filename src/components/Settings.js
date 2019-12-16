import React from 'react'
import Colors from './Colors'
import Sizes from './Sizes'

const Settings = (props) => {

    return(
        <div className="settings-container">
            <Colors handleColorSelect={props.handleColorSelect} colorState={props.colorState}/>
            <Sizes handleSizeSelect={props.handleSizeSelect} sizeState={props.sizeState}/>
        </div>
    )
}

export default Settings