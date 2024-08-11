"use client"
import Layout from '@/components/common/Layout'
import { Forum, LocalShipping, Notifications, Store } from '@mui/icons-material'
import React from 'react'
import Link from "next/link"
const page = () => {
  return (
    <Layout>
      <div className="store px-4">
        <h3 className="heading">
          Your Store
        </h3>
        <div className="quick-access-btns">
          <Link className="button button-green" href="/store/products">
            <Store />
            <h5>Your Products</h5>
          </Link>
          <Link className="button button-red" href="/store/orders">
            <LocalShipping />
            <h5>Your Order</h5>
          </Link>
          <Link className="button button-blue" href="/notifications">
            <Notifications />
            <h5>Notifications</h5>
          </Link>
          <Link className="button button-orange" href="/store/talk-to-expert">
            <Forum />
            <h5>Talk to Expert</h5>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default page