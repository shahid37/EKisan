"use client"
import CartItemCard from '@/components/cart/CartItemCard'
import Layout from '@/components/common/Layout'
import { auth } from '@/firebase'
import fetchCart from '@/util/cart/fetchCart'
import fetchUser from '@/util/user/fetchUser'
import Link from "next/link"
import { useEffect, useState } from 'react'
const Cart = () => {
    const [cartItems, setCartItem] = useState(null)
    const [grandTotal, setGrandTotal] = useState(0)
    useEffect(() => {
        const fetchData = async () => {
            const currentUser = auth.currentUser;
            const user = await fetchUser({ user: currentUser });
            const userCart = await fetchCart({ user })
            setGrandTotal(userCart.total)
            setCartItem(userCart.userCartArr);
        };

        fetchData();

    }, [])
    if (true) {
        return (
            <Layout>
                <div className="cart px-2">
                    <h3 className="heading">Your Cart</h3>
                    <div className="subtotal">
                        Subtotal <h4 className="heading">&#8377;{grandTotal.toLocaleString("en-IN")}</h4>
                    </div>
                    <Link href={"/checkout"}>
                        <button className='button'>
                            Checkout
                        </button>
                    </Link>
                    <div className="cart-products">
                        {
                            cartItems?.map((item, index) => {

                                return (
                                    <CartItemCard setGrandTotal={setGrandTotal} key={index} item={item} />
                                )
                            })
                        }
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Cart