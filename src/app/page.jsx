"use client"
import AuthGuard from '@/components/auth/AuthGuard';
import Layout from '@/components/common/Layout';
import ProductCard from '@/components/common/ProductCard';
import SearchBar from '@/components/common/SearchBar';
import Feature from '@/components/home/Feature';
import { AuthContext } from '@/providers/AuthProviser';
import filterProduct from '@/util/filter/filterProduct';
import english from '@/util/name/english';
import slug from '@/util/name/slug';
import fetchCategories from '@/util/product/fetchCategories';
import fetchProducts from '@/util/product/fetchProducts';
import Link from "next/link";
import { useContext, useEffect, useState } from 'react';
export default function Home() {
  return (
    <Layout>
      <AuthGuard>
        <HomePage />
      </AuthGuard>
    </Layout>
  )
}

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([])
  const [maxProduct, setMaxProducts] = useState(4)
  const { user } = useContext(AuthContext)
  useEffect(() => {
    const calculateProductCount = () => {
      if (window.innerWidth > 1400) {
        setMaxProducts(8)
      }
      else if (window.innerWidth > 1200) {
        setMaxProducts(6)
      }
      else if (window.innerWidth > 600) {
        setMaxProducts(5)
      }
      else {
        setMaxProducts(4)
      }
    }
    console.log(user)
    const fetchData = async () => {
      const productsList = await fetchProducts({})
      setProducts(productsList)
      setCategories(await fetchCategories({ sortType: "productCount", productList: productsList, user }))
      calculateProductCount()
    }
    fetchData();
    window.addEventListener("resize", () => {
      calculateProductCount()
    })
  }, [])
  return (
    <>
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
        </div>
        <div className="product-card-wrap">
          {
            products.slice(0, maxProduct).map((item, index) => {
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
                  item.productCount > maxProduct && <Link href={`/products/${slug(item.categorieName)}`} className="see-more">
                    See More
                  </Link>
                }

              </div>
              <div className="product-card-wrap">
                {
                  filterProduct({ products: products, category: english(item.categorieName), limit: maxProduct }).map((item, index) => {
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
    </>
  )

}