import { AuthContext } from '@/providers/AuthProviser'
import fetchOrders from '@/util/account/orders/fetchOrders'
import React, { useContext, useEffect, useState } from 'react'
import Link from "next/link"
import slug from '@/util/name/slug'
import english from '@/util/name/english'
import productLocation from '@/util/name/productLocation'
import { LocationOn, ShoppingBag } from '@mui/icons-material'
import NoProducts from '@/components/store/NoProducts'
import orderStatusCode from '@/util/common/orderStatusCode'
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
    if (!orders) {
        return null
    }
    else if (!orders?.length) {
        return <>
            <NoProducts
                btnText='Continue Shopping'
                href='/'
                description='Start exploring our products and add items to your cart '
                title="Looks like you haven't placed any orders yet."
                icon={<ShoppingBag />}
            />
        </>
    }
    else {
        return (
            <div className="orders">
                <h3 className='heading'>Orders</h3>
                <div>
                    <div className="order">
                        {
                            orders.map((item, index) => {
                                return <div key={index} className="order-item">
                                    <div className='card'>
                                        <Link href={`/products/${slug(item.category)}/${slug(item.name)}/${item.itemId}`}>
                                            <img loading='lazy' src={item.imgUrl} alt={english(item.name)} />
                                        </Link>
                                        <div className="detail">
                                            <div className="name heading"><span className="name">{english(item.name)}</span> </div>
                                            <div className='price-wrap'><span className="price">&#8377;{item.price.toLocaleString('en-IN')}</span> / {item.unit}</div>
                                            <div className="location"><LocationOn />{productLocation({ product: item })}</div>
                                            <div className="status"><b>Status</b>: {orderStatusCode[item.orderStatus]}</div>
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