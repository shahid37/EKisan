"use client"
import Layout from '@/components/common/Layout'
import { Forum, LocalShipping, Notifications, Store } from '@mui/icons-material'
import React from 'react'

const page = () => {
  return (
    <Layout>
      <div className="store px-4">
        <h3 className="heading">
          Your Store
        </h3>
        <div className="quick-access-btns">
          <div className="button button-green">
            <Store />
            <h5>Your Products</h5>
          </div>
          <div className="button button-red">
            <LocalShipping />
            <h5>Your Order</h5>
          </div>
          <div className="button button-blue">
            <Notifications />
            <h5>Notifications</h5>
          </div>
          <div className="button button-orange">
            <Forum />
            <h5>Talk to Expert</h5>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default page