"use client"
import Address from '@/components/account/tabs/Address'
import { auth } from '@/firebase'
import { AuthContext } from '@/providers/AuthProviser'
import fetchCart from '@/util/cart/fetchCart'
import english from '@/util/name/english'
import fetchUser from '@/util/user/fetchUser'
import { Edit } from '@mui/icons-material'
import { useContext, useEffect, useState } from 'react'
const Checkout = () => {
    const [cartItems, setCartItem] = useState([])
    const [grandTotal, setGrandTotal] = useState(0)
    const { user } = useContext(AuthContext)
    useEffect(() => {
        const fetchData = async () => {
            const currentUser = auth.currentUser;
            const user = await fetchUser({ user: currentUser });
            var total = 0
            const userCart = await fetchCart({ user })
            setGrandTotal(userCart.total)
            setCartItem(userCart.userCartArr);
        };

        fetchData();

    }, [])
    if (!user) { return null }
    else {
        return (
            <div className="px-2 checkout">
                <div className="heading mb-4 text-2xl">
                    Checkout
                </div>
                <div className="grid grid-cols-6">
                    <div className="heading col-span-4">
                        Product
                    </div>
                    <div className="heading col-span-2 text-right">
                        Total
                    </div>
                </div>

                {
                    cartItems.map((item, index) => {
                        return (
                            <div key={index} className='grid grid-cols-6 mt-2'>
                                <div className="item col-span-4" >
                                    <div className="name">
                                        {english(item.name)}
                                    </div>
                                    <div className="quantity">
                                        {item.price.toLocaleString("en-In")} x {item.quantity} <span className="capitalize">{item.unit}</span>
                                    </div>
                                </div>
                                <div className="price col-span-2 text-right">
                                    &#8377;{(item.price * item.quantity).toLocaleString("en-In")}
                                </div>
                            </div>
                        )
                    })
                }
                <div className='grid grid-cols-6 mt-2'>
                    <div className="col-span-4 heading text-xl" >
                        Subtotal
                    </div>
                    <div className="subtotal col-span-2 text-right">
                        &#8377;{grandTotal}
                    </div>
                </div>
                <div className="address">
                    {user.address ?
                        <>
                            <div className="heading text-lg mt-3 flex justify-between">
                                Shipping Address <Edit fontSize='15px' color='primary' />
                            </div>
                            {user.address.address_line_1}, <br />
                            {user.address.address_line_2},<br />
                            {user.district},{user.state}<br />
                            {user.address.pincode}
                        </> :
                        <Address />
                    }
                </div>
                <div className="note">
                    <p>
                        <b>Note: </b>
                        Products will be delivered by sellers and the payment method (Cash/UPI/Cheque) will be decided after shipping.
                    </p>
                </div>
            </div>
        )
    }
}

export default Checkout