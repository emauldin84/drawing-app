import React from 'react'

const Sizes = (props) => {

    let sizeOptions = ['2px', '4px', '6px', '8px', '10px', '12px', '14px', '16px', '18px', '20px']

    let strokeSizes = sizeOptions.map(sz => {
        return (
            <div key={sz} data-size={sz} className='size-container' onClick={props.handleSizeSelect}>
                <div value={sz} className='stroke-size' style={{width: sz, height: sz}}></div>
            </div>
        )
    })

    return (
        <div className='sizes-container'>
            {strokeSizes}
        </div>
    )
}

export default Sizes