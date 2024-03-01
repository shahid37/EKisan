import { AuthContext } from '@/providers/AuthProviser'
import fetchOrders from '@/util/account/orders/fetchOrders'
import React, { useContext, useEffect, useState } from 'react'
import Link from "next/link"
import slug from '@/util/name/slug'
import english from '@/util/name/english'
import productLocation from '@/util/name/productLocation'
import { LocationOn } from '@mui/icons-material'
const Orders = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState(undefined)
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchOrders({ user: user })
            setOrders(data)
        }
        fetchData();
    }, [])
    const statusCode = {
        "placed": "Order is Placed",
        "cancled": "Order is cancled",
        "dispatched": "Order is Dispatched",
        "delivered": "Order has been Delivered"
    }
    if (!orders) {
        return null
    }
    else {
        return (
            <div className="orders">
                <div>Orders</div>
                <div>
                    <div className="order">
                        {
                            orders.map((item, index) => {
                                return <div key={index} className="order-item">
                                    <div className='card'>
                                        <Link href={`/products/${slug(item.category)}/${slug(item.name)}/${item.id}`}>
                                            <img loading='lazy' src={item.imgUrl} alt={english(item.name)} />
                                        </Link>
                                        <div className="detail">
                                            <div className="name heading"><span className="name">{english(item.name)}</span> </div>
                                            <div className='price-wrap'><span className="price">&#8377;{item.price.toLocaleString('en-IN')}</span> / {item.unit}</div>
                                            <div className="location"><LocationOn />{productLocation({ product: item })}</div>
                                            <div className="status"><b>Status</b>: {item.orderStatus}</div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Orders