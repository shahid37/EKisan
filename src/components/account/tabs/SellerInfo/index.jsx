import { AuthContext } from '@/providers/AuthProviser'
import React, { useContext } from 'react'
import { Farmer } from '@/components/account/tabs/SellerInfo/farmer'
import Corporate from './corporate/Coproate'

const SellerInfo = () => {
  const { user } = useContext(AuthContext)
  if (user.userType == "farmer") {
    return <Farmer />
  }
  else if (user.userType == "corporate") {
    return <Corporate />
  }
}

export default SellerInfo