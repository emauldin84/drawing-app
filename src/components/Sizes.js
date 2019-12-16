import React from 'react'

const Sizes = (props) => {

    let sizeOptions = ['2px','4px', '6px', '8px', '10px', '12px', '14px', '16px', '18px', '20px']
    let size = sizeOptions.map(size => {
        return (
            <div className='size-container' onClick={props.handleSizeSelect(size)}>
                <div className='stroke-size' style={{width: size, height: size}}></div>
            </div>
        )
    })

    return (
        <div className='sizes-container'>
            {size}
        </div>
    )
}

export default Sizes