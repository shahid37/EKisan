import React, { useContext, useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { AuthContext } from '@/providers/AuthProviser';
import NoProducts from '../NoProducts';
import fetchRejectedProducts from '@/util/product/fetchRejectedProducts';

const RejectedProducts = () => {
    const [products, setProducts] = useState([]);
    const { user } = useContext(AuthContext)
    useEffect(() => {
        const fetchData = async () => {
            const productsList = await fetchRejectedProducts(user.uid)
            setProducts(productsList)
        }
        fetchData();

    }, [])
    if (!products?.length) {
        return (
            <NoProducts />
        )
    } else {
        return (
            <div className='listed-products'>
                <h3 className="heading">
                    Rejected Products
                </h3>
                <div className="product-card-wrap">
                    {
                        products.map((item, index) => {
                            return <ProductCard item={item} key={index} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default RejectedProducts