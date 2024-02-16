import { AuthContext } from '@/providers/AuthProviser';
import english from '@/util/name/english';
import productLocation from '@/util/name/productLocation';
import slug from '@/util/name/slug';
import addToCart from '@/util/product/addToCart';
import { Add, Remove } from '@mui/icons-material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from "next/link";
import { useContext } from 'react';

const CartItemCard = ({ item }) => {
    const { user } = useContext(AuthContext)
    return (
        <div className="cart-item">
            <div className='card'>
                <Link href={`/products/${slug(item.category)}/${slug(item.name)}/${item.id}`}>
                    <img loading='lazy' src={item.imgUrl} alt={english(item.name)} />
                </Link>
                <div className="detail">
                    <div className="name heading"><span className="name">{english(item.name)}</span> </div>
                    <div className='price-wrap'><span className="price">&#8377;{item.price.toLocaleString('en-IN')}</span> / {item.unit}</div>
                    <div className="location"><LocationOnIcon />{productLocation({ product: item })}</div>
                    <div className="quantity-control">
                        <button className="button">
                            <Remove />
                        </button>
                        <div className="box">
                            1
                        </div>
                        <button className="button">
                            <Add />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItemCard