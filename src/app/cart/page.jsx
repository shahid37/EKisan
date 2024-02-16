"use client"
import CartItemCard from '@/components/cart/CartItemCard'
import Layout from '@/components/common/Layout'
import { auth } from '@/firebase'
import { AuthContext } from '@/providers/AuthProviser'
import fetchProductData from '@/util/product/fetchProductData'
import fetchUser from '@/util/user/fetchUser'
import { useContext, useEffect, useState } from 'react'
const Cart = () => {
    const [cartItems, setCartItem] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const currentUser = auth.currentUser;
            const user = await fetchUser({ user: currentUser });

            const userCartArr = await Promise.all(
                Object.values(user?.cart).map(async (cartItem) => {
                    const productDetail = await fetchProductData(cartItem.itemId);
                    const item = { ...cartItem, ...productDetail };
                    return item;
                })
            );

            console.log(userCartArr);
            setCartItem(userCartArr);
        };

        fetchData();

    }, [])
    if (true) {
        return (
            <Layout>
                <div className="cart px-2">
                    <h3 className="heading">Your Cart</h3>
                    <div className="subtotal">
                        Subtotal <h4 className="heading">&#8377;92,300</h4>
                    </div>
                    <div className="cart-products">
                        {
                            cartItems?.map((item, index) => {

                                return (
                                    <CartItemCard key={index} item={item} />
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