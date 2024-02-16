import { Storefront } from '@mui/icons-material'
import Link from "next/link"
import React from 'react'

const NoProducts = () => {
    return (
        <div className='no-products'>
            <div className="icon">
                <Storefront />
            </div>
            <div className="heading">This section is clear</div>
            <p>You can add more products to your Store</p>
            <Link href="/store/products/add">
                <button className="button">Add Products</button>
            </Link>
        </div>
    )
}

export default NoProducts