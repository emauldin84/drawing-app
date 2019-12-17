import React from 'react'
import Colors from './Colors'
import Sizes from './Sizes'
import ClearCanvas from './ClearCanvas'

const Settings = (props) => {

    return(
        <div className="settings-container">
            <Colors handleColorSelect={props.handleColorSelect} colorState={props.colorState}/>
            <Sizes handleSizeSelect={props.handleSizeSelect} sizeState={props.sizeState}/>
            <ClearCanvas handleClearCanvas={props.handleClearCanvas}/>
        </div>
    )
}

export default Settings