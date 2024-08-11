import React, { useContext, useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import fetchItemToVerify from '@/util/product/fetchItemToVerify';
import { AuthContext } from '@/providers/AuthProviser';
import NoProducts from '../NoProducts';

const VerificationPanding = () => {
    const [products, setProducts] = useState([]);
    const { user } = useContext(AuthContext)
    useEffect(() => {
        const fetchData = async () => {
            const productsList = await fetchItemToVerify(user.uid)
            setProducts(productsList)
        }
        fetchData();

    }, [])
    if (!products?.length) {
        return (
            <NoProducts />
        )
    }
    else {
        return (
            <div className='listed-products'>
                <h3 className="heading">
                    Products with panding veification
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

export default VerificationPanding