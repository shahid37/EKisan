"use client"

import React, { useEffect, useState } from 'react';
import Layout from '@/components/common/Layout';
import ProductCard from '@/components/common/ProductCard';
import SearchBar from '@/components/common/SearchBar';
import fetchProducts from '@/util/product/fetchProducts';

const Page = ({ searchParams }) => {
    const [products, setProducts] = useState([]);
    const searchQuery = searchParams.q?.toLowerCase()
    useEffect(() => {
        const fetchData = async () => {
            const productsList = await fetchProducts({ search: searchQuery })

            setProducts(productsList)
        }
        fetchData();

    }, [])
    return (
        <Layout>
            <SearchBar />
            <div className="product-card-wrap">

                {
                    products.map((item, index) => {
                        return (
                            <ProductCard key={index} item={item} />
                        )
                    })
                }

            </div>
        </Layout>
    )
}

export default Page