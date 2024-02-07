import { AuthContext } from '@/providers/AuthProviser'
import React, { useContext } from 'react'
import { Farmer } from '@/components/account/tabs/SellerInfo/farmer'
import Corporate from '@/components/account/tabs/SellerInfo/Corporate'

const SellerInfo = () => {
  const { user } = useContext(AuthContext)
  if (user.userType == "farmer") {
    return <Farmer />
  }
  else {
    return <Corporate />
  }
}

export default SellerInfo