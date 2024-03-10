"use client"
import NoProducts from '@/components/store/NoProducts'
import { database } from '@/firebase'
import { AuthContext } from '@/providers/AuthProviser'
import orderStatusCode from '@/util/common/orderStatusCode'
import english from '@/util/name/english'
import productLocation from '@/util/name/productLocation'
import slug from '@/util/name/slug'
import sendNotifiation from '@/util/notification/sendNotifiation'
import fetchReceivedOrders from '@/util/store/orders/fetchReceivedOrders'
import { LocationOn } from '@mui/icons-material'
import { ref, set } from 'firebase/database'
import Link from "next/link"
import { useContext, useEffect, useState } from 'react'
const Orders = () => {
  const { user } = useContext(AuthContext)
  const [orders, setOrders] = useState(undefined)
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchReceivedOrders({ user: user })
      setOrders(data)
    }
    fetchData();
  }, [])

  const acceptOrder = (order) => {
    return async () => {
      const orderRef = ref(database, `orders/${order.id}/orderStatus`)
      const sellerOrderRef = ref(database, `users/${user.uid}/store/received_orders/${order.id}/orderStatus`)
      const buyerOrderRef = ref(database, `users/${order.buyerId}/orders/${order.id}/orderStatus`)
      set(orderRef, "accepted")
      set(sellerOrderRef, "accepted")
      set(buyerOrderRef, "accepted")
      await sendNotifiation({
        userId: order.buyerId,
        title: "Seller accepted your Order",
        description: `Your order for ${english(order.name)} is accepted`,
        type: "order"
      })
      location.reload()
    }

  }
  const rejectOrder = (order) => {
    return async () => {
      const orderRef = ref(database, `orders/${order.id}/orderStatus`)
      const sellerOrderRef = ref(database, `users/${user.uid}/store/received_orders/${order.id}/orderStatus`)
      const buyerOrderRef = ref(database, `users/${order.buyerId}/orders/${order.id}/orderStatus`)
      set(orderRef, "rejected")
      set(sellerOrderRef, "rejected")
      set(buyerOrderRef, "rejected")
      await sendNotifiation({
        userId: order.buyerId,
        title: "Seller rejected your Order",
        description: `Your order for ${english(item.name)} is rejected`,
        type: "order"
      })
      location.reload()
    }
  }
  if (!orders?.length) {
    return (
      <div className="px-2">
        <NoProducts
          title="No orders found"
          description="Looks like you did't received any orders yet"
          btnText=''
        />
      </div>)
  }
  else {
    return (
      <div className="orders px-2 h-[70vh]">
        <h2 className='heading text-2xl'>Your Orders</h2>
        <div>
          <div className="order">
            {orders.map((order, index) => {
              return <div key={index} className="order-item">

                <div className='card'>
                  <Link href={`/products/${slug(order.category)}/${slug(order.name)}/${order.orderId}`}>
                    <img loading='lazy' src={order.imgUrl} alt={english(order.name)} />
                  </Link>
                  <div className="detail">
                    <div className="name heading"><span className="name">{english(order.name)}</span> </div>
                    <div className='price-wrap'><span className="price">&#8377;{order.price.toLocaleString('en-IN')}</span> / {order.unit}</div>
                    <div className="location"><LocationOn />{productLocation({ product: order })}</div>
                    <div className="status"><b>Status</b>: {orderStatusCode[order.orderStatus]}</div>
                  </div>
                </div>
                {
                  order.orderStatus === "placed" &&
                  <div className="flex">
                    <button onClick={acceptOrder(order)} className="button">
                      Accept
                    </button>
                    <button onClick={rejectOrder} className="button button-red">
                      Decline
                    </button>
                  </div>
                }
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