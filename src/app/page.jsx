"use client"
import Layout from '@/components/common/Layout';
import ProductCard from '@/components/common/ProductCard';
import SearchBar from '@/components/common/SearchBar';
import Feature from '@/components/home/Feature';
import filterProduct from '@/util/filter/filterProduct';
import english from '@/util/name/english';
import slug from '@/util/name/slug';
import fetchCategories from '@/util/product/fetchCategories';
import fetchProducts from '@/util/product/fetchProducts';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Link from "next/link";
import { useEffect, useState } from 'react';
export default function Home() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([])
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
      <SearchBar />
      <Feature />
      <div className="box">
        
      </div>
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
            Newly added
          </h4>
          <a className="see-more">
            See More
          </a>
        </div>
        <div className="product-card-wrap">
          {
            products.slice(0, 4).map((item, index) => {
              return (
                <ProductCard key={index} item={item} />
              )
            })
          }

        </div>
      </div>
      {
        categories.map((item, index) => {
          return (
            <div key={index} className="products">
              <div className="head">
                <h4 className="heading">
                  {english(item.categorieName)}
                </h4>
                {
                  item.productCount > 4 && <Link href={`/products/${slug(item.categorieName)}`} className="see-more">
                    See More
                  </Link>
                }

              </div>
              <div className="product-card-wrap">
                {
                  filterProduct({ products: products, category: english(item.categorieName), limit: 4 }).map((item, index) => {
                    return (
                      <ProductCard key={index} item={item} />
                    )
                  })
                }

              </div>
            </div>
          )
        })
      }
    </Layout>
  )
}
