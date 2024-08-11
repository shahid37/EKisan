import { Add, Remove } from '@mui/icons-material'
import React from 'react'

const QuantityControl = () => {
    return (
        <div className="quantity">
            <button
                //  onClick={increase} 
                className="mx-1">
                <Remove />
            </button>
            <button className="input">
                1
            </button>
            <button
                //  onClick={decrease} 
                className="m-1">
                <Add />
            </button>
        </div>
    )
}

export default QuantityControl