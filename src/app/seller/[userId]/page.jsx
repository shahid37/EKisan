"use client"
import Layout from '@/components/common/Layout'
import ProductCard from '@/components/common/ProductCard'
import filterProduct from '@/util/filter/filterProduct'
import fetchProducts from '@/util/product/fetchProducts'
import fetchSeller from '@/util/seller/fetchSeller'
import { LocationOn } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'

const SellerProfile = ({ params }) => {
    const [products, setProducts] = useState([]);
    const [seller, setSeller] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const productsList = await fetchProducts({})
            setProducts(productsList)
            setSeller(await fetchSeller({ sellerId: params.userId }))
        }
        fetchData();

    }, [])
    if (!seller) {
        return null
    }
    else {
        return (
            <Layout>
                <div className="seller-profile">
                    <div className="detail">
                        <div className="image">
                            {
                                seller.userType == "farmer" ?
                                    <img src="/images/farmer.png" alt={"Farmer"} />
                                    :
                                    <img src="/images/corporate.svg" alt={"Corporate"} />


                            }


                        </div>
                        <div className="about">
                            <h3 className="name heading">
                                {seller.name}
                            </h3>
                            <div className="location">
                                <LocationOn /> {seller.location}
                            </div>
                        </div>
                    </div>
                    <div className="products">
                        <div className="head">
                            <h4 className="heading">
                                Products
                            </h4>
                        </div>
                        <div className="product-card-wrap">
                            {
                                filterProduct({ products, filterBy: "seller", sellerUID: seller.id }).map((item, index) => {
                                    return (
                                        <ProductCard key={index} item={item} />
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default SellerProfile