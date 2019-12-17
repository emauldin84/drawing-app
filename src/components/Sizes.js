import React from 'react'

const Sizes = (props) => {

    let sizeOptions = ['2px', '4px', '6px', '8px', '10px', '12px', '14px', '16px', '18px', '20px']

    let strokeSizes = sizeOptions.map(sz => {
        return (
            <div key={sz} data-size={sz} className={props.sizeState === sz ? 'size-container size-selected' : 'size-container'} onClick={props.handleSizeSelect}>
                <div value={sz} className={props.sizeState === sz ? 'stroke-size stroke-selected' : 'stroke-size'} style={{width: sz, height: sz}}></div>
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