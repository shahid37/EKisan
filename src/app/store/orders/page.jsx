import React from 'react'
import Link from "next/link"
import slug from '@/util/name/slug'
import english from '@/util/name/english'
import productLocation from '@/util/name/productLocation'
import { LocationOn } from '@mui/icons-material'
const Orders = () => {
  const statusCode = {
    "placed": "Order is Placed",
    "cancled": "Order is cancled",
    "dispatched": "Order is Dispatched",
    "delivered": "Order has been Delivered"
  }
  return (
    <div className="orders px-2 h-[70vh]">
      <h2 className='heading text-2xl'>Your Orders</h2>
      <div>
        <div className="order">
          {
            [
              {
                block: "Sagar",
                category: "Vegetables - सब्जियां",
                certificateNo: "200",
                district: "Samastipur",
                imgUrl: "https://firebasestorage.googleapis.com/v0/b/kisaandarshan-test.appspot.com/o/items%2F1658316258885.jpg?alt=media&token=140964f5-45ee-4c8c-be33-6ff86239ffa5",
                itemId: "-N7QLb53gUHgDLMLyImTest",
                name: "Drumstick -Test",
                orderStatus: "placed",
                organic: "yes",
                price: 105,
                quantity: 100,
                sellerName: "Dhiraj",
                sellerUID: "1ORvDRk7dIZ0f2dJ2zprI1xMMfi2",
                state: "Bihar",
                timeStamp: 1709286660794,
                unit: "kg",
                userType: "farmer",
              }
            ].map((item, index) => {
              return <div key={index} className="order-item">

                <div className='card'>
                  <Link href={`/products/${slug(item.category)}/${slug(item.name)}/${item.id}`}>
                    <img loading='lazy' src={item.imgUrl} alt={english(item.name)} />
                  </Link>
                  <div className="detail">
                    <div className="name heading"><span className="name">{english(item.name)}</span> </div>
                    <div className='price-wrap'><span className="price">&#8377;{item.price.toLocaleString('en-IN')}</span> / {item.unit}</div>
                    <div className="location"><LocationOn />{productLocation({ product: item })}</div>
                    <div className="status"><b>Status</b>: {statusCode[item.orderStatus]}</div>
                  </div>
                </div>
                <div className="flex">
                  <button className="button">
                    Accept
                  </button>
                  <button className="button button-red">
                    Decline
                  </button>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Orders