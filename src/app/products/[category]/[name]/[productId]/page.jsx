'use client';
import Layout from '@/components/common/Layout';
import ProductCard from '@/components/common/ProductCard';
import { AuthContext } from '@/providers/AuthProviser';
import filterProduct from '@/util/filter/filterProduct';
import english from '@/util/name/english';
import productLocation from '@/util/name/productLocation';
import slug from '@/util/name/slug';
import addToCart from '@/util/product/addToCart';
import fetchProductData from '@/util/product/fetchProductData';
import fetchProducts from '@/util/product/fetchProducts';
import { AddShoppingCartOutlined, LocationOnOutlined } from '@mui/icons-material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Head from 'next/head';
import Link from "next/link";
import { useContext, useEffect, useState } from 'react';
const ProductPage = ({ params }) => {
  const [product, setProduct] = useState(null)
  const [products, setProducts] = useState([])
  useEffect(() => {
    const getData = async () => {
      setProduct(await fetchProductData(params.productId))
      setProducts(await fetchProducts({}))
    }
    getData()
  }, [])
  if (product) {
    return (
      <Layout>
        <Head>
          <title>{product.name} | eKisanDarshan</title>
          <meta name="description" content={`Buy ${product.name} from eKisanDarshan`} />
          <meta name="og:image" content={product.imgUrl} />
          <meta property="og:image:width" content="500" />
          <meta property="og:image:height" content="500" />
        </Head>
        <div className="product-page">
          <div className="product-image">
            <img loading='lazy' src={product.imgUrl} alt="" />
          </div>
          <div className="item-wrap">
            <div className='left'>
              <h1 className="product-name  heading">
                {english(product.name)}
              </h1>
              <div className="price">	&#8377;{product.price.toLocaleString('en-IN')}</div>
              <div className="unit">
                <b>Unit</b>: {product.unit}
              </div>
            </div>
            <div className="add-to-cart">
              <div onClick={addToCart({ item: product})} className="add-btn">
                <AddShoppingCartOutlined />
              </div>
            </div>
          </div>
          <div className="location">
            <LocationOnOutlined />{productLocation({ product: product, short: false, linked: true })}
          </div>
          <div className="seller">
            <div className="seller-name">
              <AccountCircleOutlinedIcon /> <Link href={`/seller/${slug(product.sellerName)}/${product.sellerUID}`}>{product.sellerName}</Link>
            </div>
            <div className="seller-type">
              {product.userType === "farmer" ? <>🚜 Farmer</> : <>🏢 Comany/Organisation </>}
            </div>
          </div>
          <div className="description">
            {product.description}
          </div>
          <div className="releted-items">
            <h4 className="heading">
              Related Item
            </h4>
            <div className="product-card-wrap">
              {
                filterProduct({ products: products, category: product.category, except: params.productId }).map((item, index) => {
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
  else {
    return null
  }
}

export default ProductPage