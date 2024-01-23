"use client"
import Layout from '@/components/common/Layout';
import ProductCard from '@/components/common/ProductCard';
import Feature from '@/components/home/Feature';
import filterProduct from '@/util/filter/filterProduct';
import english from '@/util/name/english';
import slug from '@/util/name/slug';
import fetchCategories from '@/util/product/fetchCategories';
import fetchProducts from '@/util/product/fetchProducts';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Link from "next/link";
import { useEffect, useState } from 'react';
export default function Category({ params }) {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([])
    const slides = [
        {
            color: "#8B0202",
            name: "Fruit",
            img: "/images/slider/fruit.png"
        },
        {
            color: "#81B214",
            name: "vegetables",
            img: "/images/slider/vegetable.png"
        },
        {
            color: "#D98E5F",
            name: "seeds",
            img: "/images/slider/seeds.png"
        },
        {
            color: "#E8A221",
            name: "Grains",
            img: "/images/slider/wheet.png"
        },
        {
            color: "#67A037",
            name: "Fertilizers",
            img: "/images/slider/fertilizer.png"
        },
        {
            color: "#e84b16",
            name: "Equipements",
            img: "/images/slider/farm-equipments.png"
        }
    ]
    useEffect(() => {
        const fetchData = async () => {
            const productsList = await fetchProducts({})
            setProducts(productsList)
            setCategories(await fetchCategories({ sortType: "productCount", productList: productsList }))
        }
        fetchData();

    }, [])
    return (
        <Layout>
            <div className="search-bar">
                <input placeholder='Search Item, Seller, Category' type="text" />
                <div className="search-btn">
                    <button>
                        <SearchRoundedIcon />
                    </button>
                </div>
            </div>
            <Feature />
            <div className="top-categories">
                <h4 className="heading">
                    Top Categories
                </h4>
                <div className="wrap">
                    {
                        categories.map((item, index) => {
                            return (
                                <Link key={index} href={`/products/${slug(item.categorieName)}`}>
                                    <div className="item">
                                        <div className="image">
                                            <img loading='lazy' src={item.coverImage} alt={english(item.categorieName)} />
                                        </div>
                                        <h5 className="name">
                                            {english(item.categorieName)}
                                        </h5>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <div className="products">
                <div className="head">
                    <h4 className="heading">
                        {params.category.replace(/and/g, '&').replace(/-/g, ' ')}
                    </h4>
                </div>
                <div className="product-card-wrap">
                    {
                        filterProduct({ products: products, category: params.category.replace(/and/g, '&').replace(/-/g, ' ') }).map((item, index) => {
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
