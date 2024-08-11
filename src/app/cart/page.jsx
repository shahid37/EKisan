"use client"
import CartItemCard from '@/components/cart/CartItemCard'
import Layout from '@/components/common/Layout'
import { auth } from '@/firebase'
import { AuthContext } from '@/providers/AuthProviser'
import fetchCart from '@/util/cart/fetchCart'
import fetchUser from '@/util/user/fetchUser'
import Link from "next/link"
import { useContext, useEffect, useState } from 'react'
const Cart = () => {
    const [cartItems, setCartItem] = useState(undefined)
    const [grandTotal, setGrandTotal] = useState(0)
    const { user } = useContext(AuthContext)
    useEffect(() => {
        const fetchData = async () => {
            const userData = await fetchUser({ user: user });
            const userCart = await fetchCart({ user: userData })
            if (userCart) {
                setGrandTotal(userCart.total)
                setCartItem(userCart.userCartArr);
            }
            else {
                setCartItem(null)
            }
        };

        fetchData();

    }, [])

    if (cartItems === undefined) {
        return "loading"
    }
    else if (cartItems === null) {
        return (
            <div className="flex flex-col items-center justify-center h-[80vh]">
                <img className="w-64 h-auto mb-4" src="/images/placeholders/emptyCart.svg" alt="empty cart" />
                <h3 className="text-lg font-semibold">No items in cart</h3>
                <Link href="/">
                    <button className="button rounded">
                        Continue Shopping <i className="fa fa-shopping-bag"></i>
                    </button>
                </Link>
            </div>
        )
    }
    else {
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
                                    <CartItemCard setCartItem={setCartItem} setGrandTotal={setGrandTotal} key={index} item={item} />
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