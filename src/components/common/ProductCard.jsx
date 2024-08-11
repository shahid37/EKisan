import { AuthContext } from '@/providers/AuthProviser';
import english from '@/util/name/english';
import productLocation from '@/util/name/productLocation';
import slug from '@/util/name/slug';
import addToCart from '@/util/product/addToCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from "next/link";
import { useContext } from 'react';

const ProductCard = ({ item }) => {
    const { user, setUser } = useContext(AuthContext)
    return (
        <div className="product-card">
            <div className='card'>
                <Link href={`/products/${slug(item.category)}/${slug(item.name)}/${item.id}`}>
                    <img loading='lazy' src={item.imgUrl} alt={english(item.name)} />
                </Link>
                <div className="detail">
                    <div className="name heading"><span className="name">{english(item.name)}</span> </div>
                    <div className="location"><LocationOnIcon />{productLocation({ product: item })}</div>
                    <div className="price-wrap">
                        <div className="price">	&#8377;{Math.floor(item.price).toLocaleString('en-IN')}  <span>/{item.unit}</span> </div>
                        <div className="add-btn" onClick={addToCart({ user: user, item: item, setUser })}>
                            <AddShoppingCartIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard