import React, { useContext, useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import NoProducts from '../NoProducts'
import fetchProducts from '@/util/product/fetchProducts';
import filterProduct from '@/util/filter/filterProduct';
import { AuthContext } from '@/providers/AuthProviser';

const ListedProduct = () => {
    const [products, setProducts] = useState(null);
    const { user } = useContext(AuthContext)
    useEffect(() => {
        const fetchData = async () => {
            const productsList = await fetchProducts({})
            const sellerProducts = filterProduct({ filterBy: "seller", sellerUID: user.uid, products: productsList })
            setProducts(sellerProducts)
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
                    Listed Products
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

export default ListedProduct