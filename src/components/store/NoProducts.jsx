import { Description, Storefront } from '@mui/icons-material'
import Link from "next/link"
import React from 'react'

const NoProducts = ({
    icon = <Storefront />,
    title = "This section is clear",
    href = "/store/products/add",
    btnText = "Add Products",
    description = "You can add more products to your Store"
}) => {
    return (
        <div className='no-products text-center'>
            <div className="icon">
                {icon}
            </div>
            <div className="heading">{title}</div>
            <p>{description}</p>
            {
                btnText &&
                <Link href={href}>
                    <button className="button">{btnText}</button>
                </Link>
            }
        </div>
    )
}

export default NoProducts