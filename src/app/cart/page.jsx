"use client"
import Layout from '@/components/common/Layout'
import { AddShoppingCart, LocationOn, LocationOnOutlined } from '@mui/icons-material'
import React from 'react'
import Link from "next/link"
import slug from '@/util/name/slug'
import english from '@/util/name/english'
import productLocation from '@/util/name/productLocation'
const page = () => {
    const item = {

        block: "Sagar",
        category: "Vegetables - सब्जियां",
        certificateNo: "200",
        district: "Sagar",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/kisaandarshan-test.appspot.com/o/items%2F1658316258885.jpg?alt=media&token=140964f5-45ee-4c8c-be33-6ff86239ffa5",
        name: "Drumstick - मोरंगा - मुनगा",
        organic: "yes",
        price: "100",
        quantity: "200",
        sellerName: "Sangeeta ",
        sellerUID: "DHI55tOX6SQ0CpvqFr8q9i3oiom2",
        state: "Madhya Pradesh",
        timeStamp: 1658316258885,
        unit: "kg",
        userType: "farmer",

    }
    return (
        <Layout>
            <div className="cart px-4">
                <h3 className="heading">Cart</h3>
                <div className="cart-products">
                    <div className="product-card">
                        <div className='card'>
                            <Link href={`/products/${slug(item.category)}/${slug(item.name)}/${item.id}`}>
                                <img loading='lazy' src={item.imgUrl} alt={english(item.name)} />
                            </Link>
                            <div className="detail">
                                <div className="name heading"><span className="name">{english(item.name)}</span> </div>
                                <div className='unit'>{item.unit}</div>
                                <div className="location"><LocationOn />{productLocation({ product: item })}</div>
                                <div className="price-wrap">
                                    <div className="price">	&#8377;{item.price.toLocaleString('en-IN')}</div>
                                    <div className="add-btn">
                                        <AddShoppingCart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default page