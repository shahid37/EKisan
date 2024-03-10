"use client"
import Layout from '@/components/common/Layout';
import ProductCard from '@/components/common/ProductCard';
import filterProduct from '@/util/filter/filterProduct';
import fetchProducts from '@/util/product/fetchProducts';
import SearchBar from '@/components/common/SearchBar';
import { useEffect, useState } from 'react';
export default function Category({ params }) {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const productsList = await fetchProducts({})
            setProducts(productsList)
        }
        fetchData();

    }, [])
    return (
        <Layout>
            <SearchBar />
            <div className="products">
                <div className="head">
                    <h4 className="heading">
                        Products in <span className='text-capitalize'>{params.district.replace(/-/g, ' ')}</span>
                    </h4>
                </div>
                <div className="product-card-wrap">
                    {
                        filterProduct({ products: products, filterBy: "district", district: params.district.replace(/-/g, ' ') }).map((item, index) => {
                            return (
                                <ProductCard key={index} item={item} />
                            )
                        })
                    }

                </div>
            </div>
        </Layout>
    )
}
